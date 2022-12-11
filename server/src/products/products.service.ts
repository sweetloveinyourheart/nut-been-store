import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectionsService } from 'src/collections/collections.service';
import { CreateProductInput, UpdateProductInput } from './dto/product.input';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        private collectionService: CollectionsService
    ) { }

    private toLowerCaseNonAccentVietnamese(str: string): string {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
        return str;
    }

    async createProduct(data: CreateProductInput): Promise<Product> {
        try {
            const newProduct = await this.productModel.create({
                ...data,
                short_link: this.toLowerCaseNonAccentVietnamese(data.name).replace(/\s/ig, '-'),
                created_at: new Date()
            })
            return await newProduct.save()
        } catch (error) {
            throw new BadRequestException()
        }
    }

    async getLatestProduct(): Promise<Product[]> {
        try {
            return await this.productModel.find().sort({ created_at: -1 }).limit(8)
        } catch (error) {
            return []
        }
    }

    async getProductByShortLink(short_link: string): Promise<Product> {
        try {
            return await this.productModel.findOne({ short_link }).populate("product_collection")
        } catch (error) {
            throw new NotFoundException()
        }
    }

    async getProductsByCollection(collection: string): Promise<Product[]> {
        try {
            const col: any = await this.collectionService.getPageCollectionByShortLink(collection)
            return await this.productModel.find({ product_collection: col._id })
        } catch (error) {
            return []
        }
    }

    async updateProduct(product_id: string, data: UpdateProductInput): Promise<Product> {
        try {
            return await this.productModel.findByIdAndUpdate(product_id, data)
        } catch (error) {
            throw new BadRequestException()
        }
    }

    async deleteProduct(product_id: string): Promise<Product> {
        try {
            return await this.productModel.findByIdAndDelete(product_id)
        } catch (error) {
            throw new BadRequestException()
        }
    }
}

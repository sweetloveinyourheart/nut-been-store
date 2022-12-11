import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBannerInput } from './dto/banner.input';
import { Banner, BannerDocument } from './schemas/banner.schema';

@Injectable()
export class BannersService {
    constructor(
        @InjectModel(Banner.name) private bannerModel: Model<BannerDocument>
    ) {}

    async createBanner(data: CreateBannerInput): Promise<Banner> {
        try {
            const newBanners = await this.bannerModel.create(data)
            return await newBanners.save()
        } catch (error) {
            throw new BadRequestException()
        }
    }

    async getBanners(): Promise<Banner[]> {
        try {
            return await this.bannerModel.find()
        } catch (error) {
            return []
        }
    }

    async deleteBanner(id: string): Promise<Banner> {
        try {
            return await this.bannerModel.findByIdAndDelete(id)
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput, UpdateProductInput } from './dto/product.input';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product])
  async GetLatestProduct(): Promise<Product[]> {
    return this.productsService.getLatestProduct()
  }

  @Query(() => Product)
  async GetProductByShortLink(
    @Args('short_link') short_link: string
  ): Promise<Product> {
    return this.productsService.getProductByShortLink(short_link)
  }

  @Query(() => [Product])
  async GetProductByCollection(@Args('collection') collection: string): Promise<Product[]> {
    return this.productsService.getProductsByCollection(collection)
  }

  @Mutation(() => Product)
  async CreateProduct(@Args('product') data: CreateProductInput): Promise<Product> {
    return this.productsService.createProduct(data)
  }

  @Mutation(() => Product)
  async UpdateProduct(@Args('id') id: string, @Args('product') data: UpdateProductInput): Promise<Product> {
    return this.productsService.updateProduct(id, data)
  }

  @Mutation(() => Product)
  async DeleteProduct(@Args('id') id: string): Promise<Product> {
    return this.productsService.deleteProduct(id)
  }
}

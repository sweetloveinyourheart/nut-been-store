import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BannersService } from './banners.service';
import { CreateBannerInput } from './dto/banner.input';
import { Banner } from './models/banner.model';

@Resolver()
export class BannersResolver {
  constructor(private readonly bannersService: BannersService) {}

  @Query(() => [Banner])
  async GetBanners(): Promise<Banner[]> {
    return this.bannersService.getBanners()
  }

  @Mutation(() => Banner)
  async CreateBanner(@Args('banner') data: CreateBannerInput): Promise<Banner> {
    return this.bannersService.createBanner(data)
  }

  @Mutation(() => Banner)
  async DeleteBanner(@Args('id') id: string): Promise<Banner> {
    return this.bannersService.deleteBanner(id)
  }
}

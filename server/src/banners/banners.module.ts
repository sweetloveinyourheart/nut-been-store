import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersResolver } from './banners.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Banner, BannerSchema } from './schemas/banner.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Banner.name, schema: BannerSchema }])],
  providers: [BannersResolver, BannersService]
})
export class BannersModule {}

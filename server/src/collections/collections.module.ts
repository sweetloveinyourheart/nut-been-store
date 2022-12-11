import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsResolver } from './collections.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCollection, CollectionSchema } from './schemas/collection.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProductCollection.name, schema: CollectionSchema }])],
  providers: [CollectionsResolver, CollectionsService],
  exports: [CollectionsService]
})
export class CollectionsModule { }

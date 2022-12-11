import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CollectionsService } from './collections.service';
import { CreateCollectionInput } from './dto/collection.input';
import { Collection } from './models/collection.model';

@Resolver()
export class CollectionsResolver {
  constructor(private readonly collectionsService: CollectionsService) {}

  @Query(() => [Collection])
  async GetPageCollection(): Promise<Collection[]> {
    return this.collectionsService.getPageCollection()
  }

  @Query(() => Collection)
  async GetCollectionByShortLink(@Args('short_link') short_link: string): Promise<Collection> {
    return this.collectionsService.getPageCollectionByShortLink(short_link)
  }

  @Mutation(() => Collection)
  async CreateCollection(@Args('data') data: CreateCollectionInput): Promise<Collection> {
    return this.collectionsService.createCollection(data)
  }

  @Mutation(() => Collection) 
  async DeleteCollection(@Args('id') id: string): Promise<Collection> {
    return this.collectionsService.deletePageCollection(id)
  }
}

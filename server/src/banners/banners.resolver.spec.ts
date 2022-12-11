import { Test, TestingModule } from '@nestjs/testing';
import { BannersResolver } from './banners.resolver';
import { BannersService } from './banners.service';

describe('BannersResolver', () => {
  let resolver: BannersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannersResolver, BannersService],
    }).compile();

    resolver = module.get<BannersResolver>(BannersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

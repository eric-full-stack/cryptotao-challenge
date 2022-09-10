import { Module } from '@nestjs/common';
import { CacheRedisService } from '../../shared/services/cache.service';
import { NftController } from './nft.controller';
import { ListNftResolver } from './resolvers/listNft.resolver';
import { ListNftService } from './services/listNft.service';

@Module({
  imports: [CacheRedisService.module()],
  controllers: [NftController],
  providers: [ListNftService, ListNftResolver],
})
export class NftModule {}

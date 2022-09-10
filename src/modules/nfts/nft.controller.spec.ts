import { Test, TestingModule } from '@nestjs/testing';
import { CacheRedisService } from '../../shared/services/cache.service';
import { NftController } from './nft.controller';
import { ListNftService } from './services/listNft.service';

describe('NftController', () => {
  let nft: TestingModule;

  beforeAll(async () => {
    nft = await Test.createTestingModule({
      imports: [CacheRedisService.module()],
      controllers: [NftController],
      providers: [ListNftService],
    }).compile();
  });

  describe('listNfts', () => {
    it('should return NFT list for BBiKoh5jGsvb1P1L1uN2cHJwagB4yqZ38j475FKvamuo', async () => {
      const nftController = nft.get(NftController);
      const nftList = await nftController.listNfts({
        wallet: 'BBiKoh5jGsvb1P1L1uN2cHJwagB4yqZ38j475FKvamuo',
      });
      expect(nftList).toHaveLength(213);
    });
  });
});

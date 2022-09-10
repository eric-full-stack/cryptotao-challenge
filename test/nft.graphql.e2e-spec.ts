import { Test } from '@nestjs/testing';
import { ListNftService } from '../src/modules/nfts/services/listNft.service';
import { ListNftResolver } from '../src/modules/nfts/resolvers/listNft.resolver';

describe('NFT Resolver GRAPHQL (e2e)', () => {
  let listNft: ListNftResolver;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [ListNftService, ListNftResolver],
    }).compile();

    let app = module.createNestApplication();
    await app.init();
    listNft = app.get<ListNftResolver>(ListNftResolver);
  });
  it('returns list nft with graphql resolver', async () => {
    const result = await listNft.listNfts(
      'BBiKoh5jGsvb1P1L1uN2cHJwagB4yqZ38j475FKvamuo',
    );
    expect(result).toHaveLength(213);
  });
});

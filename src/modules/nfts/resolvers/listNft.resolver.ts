import { Query, Resolver, Args } from '@nestjs/graphql';
import { ListNftService } from '../services/listNft.service';

@Resolver('Nft')
export class ListNftResolver {
  constructor(private readonly listNftService: ListNftService) {}

  @Query('nfts')
  async listNfts(
    @Args('wallet')
    wallet: string,
  ) {
    return this.listNftService.execute(wallet);
  }
}

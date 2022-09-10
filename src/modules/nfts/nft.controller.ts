import {
  Controller,
  Get,
  Body,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { NFT } from 'src/interfaces/nft';
import IListNftDTO from './dtos/listNft.dto';
import { ListNftService } from './services/listNft.service';

@Controller('nfts')
@UseInterceptors(CacheInterceptor)
export class NftController {
  constructor(private readonly nftService: ListNftService) {}

  @Get()
  async listNfts(@Body() body: IListNftDTO): Promise<NFT[]> {
    return this.nftService.execute(body.wallet);
  }

  @Get('hello-world')
  async helloWorld(): Promise<string> {
    return 'Hello :) CryptoTAO';
  }
}

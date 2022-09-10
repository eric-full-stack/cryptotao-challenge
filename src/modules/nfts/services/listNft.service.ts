import { Injectable } from '@nestjs/common';
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from '@nfteyez/sol-rayz';
import { NFT } from 'src/interfaces/nft';

@Injectable()
export class ListNftService {
  async execute(wallet: string): Promise<NFT[]> {
    const publicAddress = await resolveToWalletAddress({
      text: wallet,
    });
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
    });
    return nftArray;
  }
}

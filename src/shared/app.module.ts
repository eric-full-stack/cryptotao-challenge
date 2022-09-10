import { Module } from '@nestjs/common';
import { NftModule } from '../modules/nfts/nft.module';
import { ConfigModule } from '@nestjs/config';
import { config } from '../config/cache';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    NftModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      cache: 'bounded',
    }),
  ],
})
export class AppModule {}

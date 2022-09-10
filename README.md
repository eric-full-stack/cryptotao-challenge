## Description

[Nest](https://github.com/nestjs/nest) API REST / GraphQL to listing and create NFTs on SOLANA blockchain.

## Installation

```bash
$ npm install
```

## Configuration

- Configure your redis server at `src/config/cache.ts`

## Running the app

```bash
#docker-compose
$ docker-compose up

#running simple test
curl http://localhost:3000/nfts/hello-world
```

- URLs:

* (GET) /nfts - `wallet: string` (body)
* (POST) /graphql - `nfts(wallet: string){...data}` (query)

**Cache duration: `60s`**

## Test

```bash
# unit tests
$ npm test

# e2e tests
$ npm run test:e2e

```

## Stay in touch

- Author - [Eric Prates](https://github.com/eric-full-stack)

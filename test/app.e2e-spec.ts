import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/shared/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/nfts/hello-world (GET)', () => {
    return request(app.getHttpServer())
      .get('/nfts/hello-world')
      .expect(200)
      .expect('Hello :) CryptoTAO');
  });
});

import { CacheModule, Module, Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '../../config/cache';

@Module({
  imports: [ConfigModule],
})
@Injectable()
export class CacheRedisService {
  static module() {
    const { store, host, port, password } = config().REDIS;
    return CacheModule.register({
      store,
      host,
      port,
      password,
      ttl: 60,
    });
  }
}

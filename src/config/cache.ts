import * as redisStore from 'cache-manager-redis-store';
import * as Redis from 'redis';
import { Cache, Store } from 'cache-manager';
declare namespace CacheManagerRedisStore {
  interface RedisCache extends Cache {
    store: RedisStore;
  }

  interface RedisStore extends Store {
    name: 'redis';
    getClient: () => Redis.RedisClient;
    isCacheableValue: (value: any) => boolean;
  }

  interface RedisStoreConstructor {
    create: (options?: Redis.ClientOpts) => RedisStore;
  }
}
export interface ICacheConfig {
  REDIS: {
    store: CacheManagerRedisStore.RedisStoreConstructor;
    host: string;
    port: number;
    password: string;
  };
}

export const config: () => ICacheConfig = () => ({
  REDIS: {
    store: redisStore,
    host: 'cache',
    port: 6379,
    password: 'redispass',
  },
});

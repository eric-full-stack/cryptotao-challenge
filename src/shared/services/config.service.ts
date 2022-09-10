import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get redisConfig() {
    return this.configService.get('REDIS');
  }
}

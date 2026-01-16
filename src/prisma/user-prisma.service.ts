import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as UserPrismaClient } from '../../prisma/prisma-clients/user-client';

@Injectable()
export class UserPrismaService extends UserPrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({});
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

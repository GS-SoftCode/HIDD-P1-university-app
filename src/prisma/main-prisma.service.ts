import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient as MainPrismaClient } from '../../prisma/prisma-clients/main-client';

@Injectable()
export class MainPrismaService extends MainPrismaClient implements OnModuleInit, OnModuleDestroy {
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

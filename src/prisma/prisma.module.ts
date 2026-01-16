import { Global, Module } from '@nestjs/common';
import { MainPrismaService } from './main-prisma.service';
import { UserPrismaService } from './user-prisma.service';

@Global()
@Module({
  providers: [MainPrismaService, UserPrismaService],
  exports: [MainPrismaService, UserPrismaService],
})
export class PrismaModule {}

import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, MainPrismaService],
})
export class AdminModule {}
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserPrismaService } from '../prisma/user-prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserPrismaService],
  exports: [UserService],
})
export class UserModule {}

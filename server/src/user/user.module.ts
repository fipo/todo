import { Module } from '@nestjs/common';
import { UserResolvers } from './user.resolvers';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  providers: [UserResolvers, UserService],
  imports: [PrismaModule],
})
export class UserModule {}

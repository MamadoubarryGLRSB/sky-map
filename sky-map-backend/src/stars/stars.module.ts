import { Module } from '@nestjs/common';
import { StarsController } from './stars.controller';
import { StarsService } from './stars.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [StarsController],
  providers: [StarsService, PrismaService],
  exports: [StarsService],
})
export class StarsModule {}

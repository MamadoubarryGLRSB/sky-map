import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarsModule } from './stars/stars.module';

@Module({
  imports: [StarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

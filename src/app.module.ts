import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { VillaModule } from './villa/villa.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [DatabaseModule, VillaModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { VillaModule } from './villa/villa.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, VillaModule, ReviewsModule, UserModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}

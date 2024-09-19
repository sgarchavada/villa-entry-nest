import { Module } from '@nestjs/common';
import { VillaService } from './villa.service';
import { VillaController } from './villa.controller';

@Module({
  controllers: [VillaController],
  providers: [VillaService],
})
export class VillaModule {}

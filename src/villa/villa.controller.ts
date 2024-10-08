import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VillaService } from './villa.service';
import { Prisma } from '@prisma/client';

@Controller('villas')
export class VillaController {
  constructor(private readonly villaService: VillaService) {}

  @Post()
  create(@Body() createVillaDto: Prisma.VillaCreateInput) {
    return this.villaService.create(createVillaDto);
  }

  @Get()
  findAll() {
    return this.villaService.findAll();
  }

  @Get('owner/:ownerId')
  async getVillasByOwner(@Param('ownerId') ownerId: string) {
    return this.villaService.getVillasByOwner(ownerId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVillaDto: Prisma.VillaUpdateInput,
  ) {
    return this.villaService.update(+id, updateVillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villaService.remove(+id);
  }
}

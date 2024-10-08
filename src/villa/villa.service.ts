import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VillaService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createVillaDto: Prisma.VillaCreateInput) {
    return this.databaseService.villa.create({
      data: createVillaDto,
    });
  }

  async findAll() {
    return this.databaseService.villa.findMany({});
  }

  // Method to get villas by owner ID
  async getVillasByOwner(ownerId: string) {
    return this.databaseService.villa.findMany({
      where: {
        userId: ownerId,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.villa.findUnique({
      where: { id },
      include: {
        reviews: true,
      },
    });
  }

  async update(id: number, updateVillaDto: Prisma.VillaUpdateInput) {
    return this.databaseService.villa.update({
      where: { id },
      data: updateVillaDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.villa.delete({
      where: { id },
    });
  }
}

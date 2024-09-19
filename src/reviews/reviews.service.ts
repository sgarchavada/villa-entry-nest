import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createreviewDto: Prisma.ReviewCreateInput) {
    return this.databaseService.review.create({
      data: createreviewDto,
    });
  }

  async findAll() {
    return this.databaseService.review.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.review.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatereviewDto: Prisma.ReviewUpdateInput) {
    return this.databaseService.review.update({
      where: { id },
      data: updatereviewDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.review.delete({
      where: { id },
    });
  }
}

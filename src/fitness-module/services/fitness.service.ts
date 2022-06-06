import { Injectable } from '@nestjs/common';
import { FitnessImpl } from '../implements/fitness.impl';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Fitness, FitnessDocument } from '../schemas/fitness.schema';
import { FitnessDto } from '../dto/fitnes.dto';

@Injectable()
export class FitnessService implements FitnessImpl {
  constructor(
    @InjectModel(Fitness.name) private fitnessModel: Model<FitnessDocument>,
  ) {}

  async createFitness(fitnessDto: FitnessDto): Promise<Fitness> {
    const createFitness = new this.fitnessModel(fitnessDto);
    return await createFitness.save();
  }
  getFitnessById(): void {
    throw new Error('Method not implemented.');
  }
  async getAllFitness(): Promise<Fitness[]> {
    return await this.fitnessModel.find().exec();
  }
  updateFitness(): void {
    throw new Error('Method not implemented.');
  }
  deleteFitness(): void {
    throw new Error('Method not implemented.');
  }
}

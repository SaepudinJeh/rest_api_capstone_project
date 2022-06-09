import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Fitness, FitnessDocument } from '../schemas/fitness.schema';
import { FitnessDto } from '../dto/fitnes.dto';

@Injectable()
export class FitnessService {
  constructor(
    @InjectModel(Fitness.name) private fitnessModel: Model<FitnessDocument>,
  ) {}

  async createFitness(fitnessDto: FitnessDto): Promise<Fitness> {
    const createFitness = new this.fitnessModel(fitnessDto);
    return await createFitness.save();
  }
  async getAllFitness(): Promise<Fitness[]> {
    return await this.fitnessModel.find().exec();
  }
}

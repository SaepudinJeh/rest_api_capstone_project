import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Fitness, FitnessDocument } from '../schemas/fitness.schema';
import { FitnessDto } from '../dto/fitnes.dto';
import { UpdateFitnessDto } from '../dto/update.fitness.dto';

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

  async deleteAllFitness(): Promise<string> {
    await this.fitnessModel.deleteMany().exec();
    return 'Delete All Fitness successfully';
  }

  async deleteFitness(id: any): Promise<string> {
    await this.fitnessModel.findByIdAndDelete(id);
    return 'Delete Fitness Successfully!';
  }

  async updateFitness(id: any, fitnessDto: UpdateFitnessDto): Promise<Fitness> {
    return await this.fitnessModel.findByIdAndUpdate(
      { _id: id },
      { ...fitnessDto },
      { new: true },
    );
  }

  async findFitness(id: any): Promise<Fitness> {
    return await this.fitnessModel.findById(id);
  }
}

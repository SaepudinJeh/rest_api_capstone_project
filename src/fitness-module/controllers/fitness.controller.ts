import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { CloudinaryService } from 'src/cloudinary.module/cloudinary.service';
import { FitnessDto } from '../dto/fitnes.dto';
import { FitnessService } from '../services/fitness.service';

@Controller('/api/v1/fitness')
export class FitnessController {
  constructor(
    private readonly fitnessService: FitnessService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Body Payload Create Fitness',
    type: FitnessDto,
  })
  async createFitness(
    @Body() fitnessDto: FitnessDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const cloudinaryUpload = await this.cloudinary.uploadImage(file);

    console.log({ cloudinaryUpload });

    return this.fitnessService.createFitness({
      ...fitnessDto,
      image: cloudinaryUpload.secure_url,
    });
  }

  @Get()
  findAllFitness() {
    return this.fitnessService.getAllFitness();
  }

  @Delete()
  deleteAllFitness() {
    return this.fitnessService.deleteAllFitness();
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteFitness(@Param() params) {
    return this.fitnessService.deleteFitness(params.id);
  }
}

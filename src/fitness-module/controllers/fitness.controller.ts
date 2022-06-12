import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  UploadedFile,
  UseInterceptors,
  Put,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CloudinaryService } from 'src/cloudinary.module/cloudinary.service';
import { FitnessDto } from '../dto/fitnes.dto';
import { UpdateFitnessDto } from '../dto/update.fitness.dto';
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
  @ApiOperation({ summary: 'Create Fitness Data' })
  @ApiBody({
    description: 'Body Payload Create Fitness',
    type: FitnessDto,
  })
  async createFitness(
    @Body() fitnessDto: FitnessDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const cloudinaryUpload = await this.cloudinary.uploadImage(file);

    return this.fitnessService.createFitness({
      ...fitnessDto,
      image: cloudinaryUpload.secure_url,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Find All Fitness' })
  async findAllFitness(@Res() response) {
    const result = await this.fitnessService.getAllFitness();

    if (!Array.isArray(result) || result.length == 0) {
      response.status(200).json({
        message: 'Data is Empty',
        statusCode: 200,
        data: result,
      });
    } else {
      response.status(200).json({
        message: 'Data Result Successfully',
        statusCode: 200,
        data: result,
      });
    }
  }

  @Delete()
  @ApiOperation({ summary: 'Delete All Fitness' })
  deleteAllFitness() {
    return this.fitnessService.deleteAllFitness();
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Delete Fitness By ID' })
  deleteFitness(@Param() params) {
    return this.fitnessService.deleteFitness(params.id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Update Fitness' })
  async updateFitness(
    @Param() params,
    @Body() fitnessDto: UpdateFitnessDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const cloudinaryUpload = await this.cloudinary?.uploadImage(file);

    return this.fitnessService.updateFitness(params.id, {
      ...fitnessDto,
      image: cloudinaryUpload?.secure_url,
    });
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Find Fitness By ID' })
  async findFitness(@Param() params, @Res() response) {
    const result = await this.fitnessService.findFitness(params.id);

    if (!result) {
      response.status(400).json({
        message: 'Data is Empty',
        statusCode: 400,
      });
    } else {
      response.status(200).json({
        message: 'Data Result Successfully',
        statusCode: 200,
        data: result,
      });
    }
  }
}

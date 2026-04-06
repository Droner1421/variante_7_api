import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { EvaluacionService } from './evaluacion.service';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Controller('Evaluacion')
export class EvaluacionController {
  constructor(private readonly EvaluacionService: EvaluacionService) {}

  @Post()
  async create(@Body( new ValidationPipe) createEvaluacionDto: CreateEvaluacionDto) {
    return this.EvaluacionService.create(createEvaluacionDto);
  }

  @Get()
  async findAll() {
    return this.EvaluacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.EvaluacionService.findOne(id);
  }

  @Patch(':id')
 async  update(@Param('id') id: number, @Body(new ValidationPipe) updateEvaluacionDto: UpdateEvaluacionDto) {
    return this.EvaluacionService.update(id, updateEvaluacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.EvaluacionService.remove(id);
  }
}

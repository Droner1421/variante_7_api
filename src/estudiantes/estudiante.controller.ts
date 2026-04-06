import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('Estudiante')
export class EstudianteController {
  constructor(private readonly EstudianteService: EstudianteService) {}

  @Post()
  async create(@Body( new ValidationPipe) createEstudianteDto: CreateEstudianteDto) {
    return this.EstudianteService.create(createEstudianteDto);
  }

  @Get()
  async findAll() {
    return this.EstudianteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.EstudianteService.findOne(id);
  }

  @Patch(':id')
 async  update(@Param('id') id: number, @Body(new ValidationPipe) updateEstudianteDto: UpdateEstudianteDto) {
    return this.EstudianteService.update(id, updateEstudianteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.EstudianteService.remove(id);
  }
}

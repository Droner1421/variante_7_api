import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';

@Controller('Calificacion')
export class CalificacionController {
  constructor(private readonly CalificacionService: CalificacionService) {}

  @Post()
  async create(@Body( new ValidationPipe) createCalificacionDto: CreateCalificacionDto) {
    return this.CalificacionService.create(createCalificacionDto);
  }

  @Get()
  async findAll() {
    return this.CalificacionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.CalificacionService.findOne(id);
  }

  @Patch(':id')
 async  update(@Param('id') id: number, @Body(new ValidationPipe) updateCalificacionDto: UpdateCalificacionDto) {
    return this.CalificacionService.update(id, updateCalificacionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.CalificacionService.remove(id);
  }
}

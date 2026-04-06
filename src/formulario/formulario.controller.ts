import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';

@Controller('Formulario')
export class FormularioController {
  constructor(private readonly FormularioService: FormularioService) {}

  @Post()
  async create(@Body( new ValidationPipe) createFormularioDto: CreateFormularioDto) {
    return this.FormularioService.create(createFormularioDto);
  }

  @Get()
  async findAll() {
    return this.FormularioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.FormularioService.findOne(id);
  }

  @Patch(':id')
 async  update(@Param('id') id: number, @Body(new ValidationPipe) updateFormularioDto: UpdateFormularioDto) {
    return this.FormularioService.update(id, updateFormularioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.FormularioService.remove(id);
  }
}

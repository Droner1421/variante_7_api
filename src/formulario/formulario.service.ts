import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './entities/formulario.entity';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';

@Injectable()
export class FormularioService {
  constructor(
    @InjectRepository(Formulario)
    private readonly FormularioRepository: Repository<Formulario>,
  ){}

 async create(createFormularioDto: CreateFormularioDto) {
  const nuevoFormulario = await this.FormularioRepository.create(createFormularioDto);
      return await this.FormularioRepository.save(nuevoFormulario);
  }

 async findAll() {
     return await this.FormularioRepository.find();
  }

  async findOne(id: number) {
    return await this.FormularioRepository.findOneBy({id});
  }

  async  update(id: number, updateFormularioDto: UpdateFormularioDto) {
     await this.FormularioRepository.update(id, updateFormularioDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.FormularioRepository.delete(id);
  }
}

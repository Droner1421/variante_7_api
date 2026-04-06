import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly EstudianteRepository: Repository<Estudiante>,
  ){}

 async create(createEstudianteDto: CreateEstudianteDto) {
  const nuevoEstudiante = await this.EstudianteRepository.create(createEstudianteDto);
      return await this.EstudianteRepository.save(nuevoEstudiante);
  }

 async findAll() {
     return await this.EstudianteRepository.find();
  }

  async findOne(id: number) {
    return await this.EstudianteRepository.findOneBy({id});
  }

  async  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
     await this.EstudianteRepository.update(id, updateEstudianteDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.EstudianteRepository.delete(id);
  }
}

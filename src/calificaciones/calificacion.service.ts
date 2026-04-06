import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacion } from './entities/calificacion.entity';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';

@Injectable()
export class CalificacionService {
  constructor(
    @InjectRepository(Calificacion)
    private readonly CalificacionRepository: Repository<Calificacion>,
  ){}

 async create(createCalificacionDto: CreateCalificacionDto) {
  const nuevoCalificacion = await this.CalificacionRepository.create(createCalificacionDto);
      return await this.CalificacionRepository.save(nuevoCalificacion);
  }

 async findAll() {
     return await this.CalificacionRepository.find();
  }

  async findOne(id: number) {
    return await this.CalificacionRepository.findOneBy({id});
  }

  async  update(id: number, updateCalificacionDto: UpdateCalificacionDto) {
     await this.CalificacionRepository.update(id, updateCalificacionDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.CalificacionRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly EvaluacionRepository: Repository<Evaluacion>,
  ){}

 async create(createEvaluacionDto: CreateEvaluacionDto) {
  const nuevoEvaluacion = await this.EvaluacionRepository.create(createEvaluacionDto);
      return await this.EvaluacionRepository.save(nuevoEvaluacion);
  }

 async findAll() {
     return await this.EvaluacionRepository.find();
  }

  async findOne(id: number) {
    return await this.EvaluacionRepository.findOneBy({id});
  }

  async  update(id: number, updateEvaluacionDto: UpdateEvaluacionDto) {
     await this.EvaluacionRepository.update(id, updateEvaluacionDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.EvaluacionRepository.delete(id);
  }
}

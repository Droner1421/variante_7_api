import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';
import { Formulario } from './entities/formulario.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Formulario])],
  controllers: [FormularioController],
  providers: [FormularioService],
})
export class FormularioModule {}

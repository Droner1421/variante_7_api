import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiantes/estudiante.module'; 
import { EvaluacionModule } from './evaluaciones/evaluacion.module'; 
import { CalificacionModule } from './calificaciones/calificacion.module'; 
import { Estudiante } from './estudiantes/entities/estudiante.entity';
import { Evaluacion } from './evaluaciones/entities/evaluacion.entity';
import { Calificacion } from './calificaciones/entities/calificacion.entity';
import {TypeOrmModule} from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3307,
      username: "root",
      password: "",
      database: "variante_7",
      entities: [Estudiante, Evaluacion, Calificacion],
      synchronize: true,
      autoLoadEntities: false,
    }), 
    EstudianteModule,
    EvaluacionModule,
    CalificacionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

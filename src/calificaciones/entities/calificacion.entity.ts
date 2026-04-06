import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Evaluacion } from '../../evaluaciones/entities/evaluacion.entity';

@Entity()
export class Calificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estudiante_id: number;

  @Column()
  evaluacion_id: number;

  @Column()
  calificacion: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.calificaciones)
  @JoinColumn({ name: 'estudiante_id' })
  estudiante: Estudiante;

  @ManyToOne(() => Evaluacion, (evaluacion) => evaluacion.calificaciones)
  @JoinColumn({ name: 'evaluacion_id' })
  evaluacion: Evaluacion;
}

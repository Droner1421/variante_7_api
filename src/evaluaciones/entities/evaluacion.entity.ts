import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Calificacion } from '../../calificaciones/entities/calificacion.entity';

@Entity()
export class Evaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ type: 'date' })
  fecha: Date;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.evaluacion)
  calificaciones: Calificacion[];
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Calificacion } from '../../calificaciones/entities/calificacion.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  grupo: string;

  @OneToMany(() => Calificacion, (calificacion) => calificacion.estudiante)
  calificaciones: Calificacion[];
}

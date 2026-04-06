import {
  IsNumber,
  Min,
  Max,
  IsInt,
} from 'class-validator';

export class CreateCalificacionDto {
  @IsNumber()
  @IsInt()
  @Min(0)
  estudiante_id: number;

  @IsNumber()
  @IsInt()
  @Min(0)
  evaluacion_id: number;

  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(100)
  calificacion: number;
}

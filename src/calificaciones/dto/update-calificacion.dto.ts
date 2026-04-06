import {
  IsNumber,
  Min,
  Max,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateCalificacionDto {
  @IsNumber()
  @IsInt()
  @Min(0)
  @IsOptional()
  estudiante_id: number;

  @IsNumber()
  @IsInt()
  @Min(0)
  @IsOptional()
  evaluacion_id: number;

  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(100)
  @IsOptional()
  calificacion: number;
}

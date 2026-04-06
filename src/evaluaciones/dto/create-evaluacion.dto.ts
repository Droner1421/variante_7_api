import {
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
} from 'class-validator';

export class CreateEvaluacionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  titulo: string;

  @IsDateString()
  fecha: string;
}

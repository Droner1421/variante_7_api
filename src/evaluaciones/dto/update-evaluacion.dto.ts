import {
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class UpdateEvaluacionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsOptional()
  titulo: string;

  @IsDateString()
  @IsOptional()
  fecha: string;
}

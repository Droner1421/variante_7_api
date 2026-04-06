import {
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class UpdateEstudianteDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsOptional()
  nombre: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @IsOptional()
  grupo: string;
}

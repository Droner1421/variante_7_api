import {
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateEstudianteDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  nombre: string;

  @IsString()
  @MinLength(1)
  @MaxLength(50)
  grupo: string;
}

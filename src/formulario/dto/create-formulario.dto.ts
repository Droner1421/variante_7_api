import {
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsOptional,
  IsNumberString,
} from 'class-validator';

export class CreateFormularioDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  razon_social: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  rfc: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  giro_comercial: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  direccion_fiscal: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  representante_legar: string;

  @IsEmail()
  correo: string;

  @IsNumberString()
  telefono: string;

  @IsNumberString()
  numero_de_empleados: string;

  @IsNumberString()
  años_de_experiencia: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  capacidad_tecnica: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  certificaciones: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  clientes_principales: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  banco_y_cuenta: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  conflicto_de_intereses: string;

  @IsString()
  @MaxLength(255)
  Firma_del_representante: string;

  
  @IsOptional()
  @IsString()
  imagen_rfc: string;

  @IsOptional()
  @IsString()
  imagen_acta_constitutiva: string;

  @IsOptional()
  @IsString()
  imagen_comprobante_fiscal: string;

  @IsOptional()
  @IsString()
  imagen_identificacion_legal: string;

  @IsOptional()
  @IsString()
  imagen_certificaciones_iso: string;

  @IsOptional()
  @IsString()
  imagen_comprobante_bancario: string;
}

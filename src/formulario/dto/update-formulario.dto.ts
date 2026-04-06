import {
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsOptional,
  IsNumberString,
} from 'class-validator';

export class UpdateFormularioDto {
  @IsString()
  @MinLength(3)
  @MaxLength(250)
  @IsOptional()
  razon_social: string;

  @IsString()
  @MinLength(3)
  @MaxLength(13)
  @IsOptional()
  rfc: string;

  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @IsOptional()
  giro_comercial: string;

  @IsString()
  @MinLength(5)
  @MaxLength(300)
  @IsOptional()
  direccion_fiscal: string;

  @IsString()
  @MinLength(3)
  @MaxLength(200)
  @IsOptional()
  representante_legar: string;

  @IsEmail()
  @IsOptional()
  correo: string;

  @IsNumberString()
  @IsOptional()
  telefono: string;

  @IsNumberString()
  @IsOptional()
  numero_de_empleados: string;

  @IsNumberString()
  @IsOptional()
  años_de_experiencia: string;

  @IsString()
  @MinLength(5)
  @MaxLength(500)
  @IsOptional()
  capacidad_tecnica: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  @IsOptional()
  certificaciones: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  @IsOptional()
  clientes_principales: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  banco_y_cuenta: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  @IsOptional()
  conflicto_de_intereses: string;

  @IsString()
  @MaxLength(250)
  @IsOptional()
  Firma_del_representante: string;

  
  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_rfc: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_acta_constitutiva: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_comprobante_fiscal: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_identificacion_legal: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_certificaciones_iso: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  imagen_comprobante_bancario: string;
}

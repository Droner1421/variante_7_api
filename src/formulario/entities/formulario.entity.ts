import { Entity,Column,PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Formulario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  razon_social: string;

  @Column()
  rfc: string;

  @Column()
  giro_comercial: string;

  @Column()
  direccion_fiscal: string;

  @Column()
  representante_legar: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column()
  numero_de_empleados: string;

  @Column()
  años_de_experiencia: string;

  @Column()
  capacidad_tecnica: string;

  @Column()
  certificaciones: string;

  @Column()
  clientes_principales: string;

  @Column()
  banco_y_cuenta: string;

  @Column()
  conflicto_de_intereses: string;

  @Column()
  Firma_del_representante: string;

   @Column({type: 'text'})
  imagen_rfc: string;

   @Column({type: 'text'})
  imagen_acta_constitutiva: string;

   @Column({type: 'text'})
  imagen_comprobante_fiscal: string;

   @Column({type: 'text'})
  imagen_identificacion_legal: string;

   @Column({type: 'text'})
  imagen_certificaciones_iso: string;

   @Column({type: 'text'})
  imagen_comprobante_bancario: string;

}

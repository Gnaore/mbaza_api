import { SouhaitEnums } from "src/enums/souhaits.enums";

import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('requete')
export class RequeteEntity {
  @PrimaryGeneratedColumn()
  idRequete: number;

  @Column()
  codeRequete: string;

  @Column()
  categorieRequete: string;

  @Column()
  typeRequete: string;

  @Column()
  infoLocalisation: string;

  @Column()
  infoCritere: string;

  @Column()
  bienMeuble: boolean;

  @Column()
  bienMeubleDatedebut: Date;

  @Column()
  bienMeubleDatefin: Date;

  @Column()
  nombrePiece: number;

  @Column()
  nombrePlace: number;

  @Column()
  superficie: number;

  @Column({ type: 'int', width: 200 })
  montantDebut: number;

  @Column({ type: 'int', width: 200 })
  montantFin: number;

  @Column()
  nomComplet: string;

  @Column()
  numeroTelephpne: string;

  @Column()
  adresseMail: string;

  @Column({
    type: 'enum',
    enum: SouhaitEnums,
    default: null,
  })
  souhait: string;
}
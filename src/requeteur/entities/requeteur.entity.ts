import { RequeteEntity } from "src/requete/entities/requete.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('requeteur')
export class RequeteurEntity {
  @PrimaryGeneratedColumn()
  idRequeteur: number;

  @Column()
  nomComplet: string;

  @Column()
  numeroTelephpne: string;
  @Column()
  adresseMail: string;

 
}
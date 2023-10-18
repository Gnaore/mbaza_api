import { TimestampEntities } from "src/generics/timestampEmtities";
import { PaysEntity } from "src/pays/pays.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Banque')
export class BanqueEntity extends TimestampEntities{
  @PrimaryGeneratedColumn()
  banqueId: number
  @Column({ length: 8 })
  banqueCode: string
  @Column()
  libelleBanque: string
  @Column({ length: 65 })
  sigleBanque: string
  @Column({ length: 65 })
  contactBanque: string
  
  @ManyToOne(
    type => PaysEntity , 
    (pays)=> pays.banques,
    {
      cascade: true,
      eager: true,
      nullable: true   
    })
  pays: PaysEntity;
}

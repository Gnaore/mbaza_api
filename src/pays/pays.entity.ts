import { BanqueEntity } from "src/banque/banque.entity";
import { TimestampEntities } from "src/generics/timestampEmtities";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Pays')
export class PaysEntity extends TimestampEntities  {
    @PrimaryGeneratedColumn()
    paysId: number;
    @Column()
    libellePays: string
    @Column({length: 65})
    codePays: string

    @OneToMany(
        type => BanqueEntity , 
        (banque) => banque.pays)
    banques: BanqueEntity[];
}


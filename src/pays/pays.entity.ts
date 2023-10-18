import { TimestampEntities } from "src/generics/timestampEmtities";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Pays')
export class PaysEntity extends TimestampEntities  {
    @PrimaryGeneratedColumn()
    paysId: number;
    @Column()
    libellePays: string
    @Column({length: 65})
    codePays: string
}


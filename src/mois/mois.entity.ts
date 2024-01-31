import { IsNotEmpty } from "class-validator";
import { TimestampEntities } from "src/generics/timestampEmtities";
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('Mois')
export class MoisEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    moisId: number

    @IsNotEmpty()
    @Column()
    moisNumero: number

    @IsNotEmpty()
    @Column({length: 65})
    moisLibelle: string

}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Typebien')
export class TypebienEntity {
    @PrimaryGeneratedColumn()
    typebienId: number
    @Column()
    libelleTypebien: string
}

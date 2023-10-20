import { BienEntity } from "src/bien/bien.entity";
import { ProprieteEntity } from "src/propriete/propriete.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Typebien')
export class TypebienEntity {
    @PrimaryGeneratedColumn()
    typebienId: number
    @Column()
    libelleTypebien: string

    @OneToMany(
        type => ProprieteEntity,
        (propriete) => propriete.typebien
    )
    proprietes: ProprieteEntity[];

    @OneToMany(
        type => BienEntity,
        (bien) => bien.typebien
    )
    biens: BienEntity[]

}

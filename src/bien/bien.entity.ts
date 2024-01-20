import { TypebienEntity } from "src/typebien/typebien.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bien')
export class BienEntity {
    @PrimaryGeneratedColumn()
    bienId: number
    @Column()
    bienLibelle: string
    @Column({ length: 65 })
    bienCategorie: string
    @Column()
    bienDescription: string
    @Column({ nullable: true, type: 'float', default: 0 })
    bienSurface: number
    @Column({ nullable: true, default: 0 })
    bienNbrePiece: number
    @Column({ default: 0 })
    bienPrix: number
    @Column({ length: 65 })
    bienVille: string
    @Column({ length: 65 })
    bienCommuneQuartier: string
    @Column()
    bienAdresse: string
    @Column()
    bienNomBailleur: string
    @Column({ length: 65 })
    bienContactBailleur: string
    @Column()
    bienContrat: string
    @Column()
    bienImage: string
    @Column({ length: 65 })
    bienReference: string

    @ManyToOne(
        type => TypebienEntity,
        (typebien) => typebien.biens
    )
    typebien: TypebienEntity

}

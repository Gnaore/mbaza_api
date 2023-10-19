import { type } from "os";
import { BailleurEntity } from "src/bailleur/bailleur.entity";
import { TypebienEntity } from "src/typebien/typebien.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Propriete')
export class ProprieteEntity {
    @PrimaryGeneratedColumn()
    proprieteId: number
    @Column({ length: 65 })
    proprieteCode: string
    @Column()
    proprieteAdresse: string
    @Column()
    proprieteAnnee: number
    @Column({ nullable: true, default: 0, type: "float" })
    proprieteSurface: number
    @Column({ nullable: true, default: 0 })
    proprieteNbrEtage: number
    @Column({ nullable: true, default: 0 })
    proprieteNbrChambre: number
    @Column({ nullable: true, default: 0 })
    proprieteNbreSalleBain: number
    @Column({ nullable: true })
    proprieteDescription: string
    @Column({ nullable: true })
    proprieteStatu: number
    @Column({ nullable: true, default: 0, type: "float" })
    proprietePrix: number
    @Column({ nullable: true, default: 0, type: "float" })
    proprietePret: number
    @Column({ nullable: true, default: false })
    proprieteJardin: boolean
    @Column({ nullable: true, default: false })
    proprietePiscine: boolean
    @Column({ nullable: true, default: false })
    proprieteGarage: boolean
    @Column({ nullable: true, default: false })
    proprieteBalcon: boolean
    @Column({ nullable: true, default: false })
    proprieteChemine: boolean
    @Column({ nullable: true, default: false })
    proprieteClimatisation: boolean
    @Column({ nullable: true, default: false })
    proprieteEquipement: boolean
    @Column({ nullable: true })
    proprieteequipementdetails: string
    @Column({ nullable: true, default: 0, type: "float" })
    proprieteLongitude: number
    @Column({ nullable: true, default: 0, type: "float" })
    proprieteLatitude: number
    @Column({ nullable: true })
    proprieteQuartier: string
    @Column()
    proprieteLienPhoto: string

    @ManyToOne(
        type => BailleurEntity,
        (bailleur) => bailleur.proprietes,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    bailleur: BailleurEntity;

    @ManyToOne(
        type => TypebienEntity,
        (typebien) => typebien.proprietes,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    typebien: TypebienEntity;


}
/*
model Propriete {
  locataire                  Locataire?
}

*/
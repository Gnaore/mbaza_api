import { type } from "os";
import { BailleurEntity } from "src/bailleur/bailleur.entity";
import { LocataireEntity } from "src/locataire/locataire.entity";
import { TypebienEntity } from "src/typebien/typebien.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Propriete')
export class ProprieteEntity {
    @PrimaryGeneratedColumn()
    proprieteId: number
    @Column({ length: 65, unique: true })
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
    proprieteStatu: string
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
    )
    bailleur: BailleurEntity;

    @ManyToOne(
        type => TypebienEntity,
        (typebien) => typebien.proprietes,
    )
    typebien: TypebienEntity;

    @OneToOne(
        type => LocataireEntity,
        (locataire) => locataire.propriete
        )
    locataire: LocataireEntity

}
/*
model Propriete {
  locataire                  Locataire?
}

*/
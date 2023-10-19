import { BanqueEntity } from "src/banque/banque.entity";
import { TimestampEntities } from "src/generics/timestampEmtities";
import { ProprieteEntity } from "src/propriete/propriete.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bailleur')
export class BailleurEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    bailleurId: number
    @Column()
    bailleurNomPrenoms: string
    @Column({ length: 65 })
    bailleurTelephone: string
    @Column()
    bailleurAdresse: string
    @Column()
    bailleurEmail: string
    @Column()
    bailleurDateNaissance: Date
    @Column({ length: 65, nullable: true })
    bailleurNumero: string
    @Column({ length: 65, nullable: true })
    bailleurNumCompte: string
    @Column({ nullable: true })
    bailleurRevenu: number
    @Column({ nullable: true })
    bailleurTaux: number
    @Column({ nullable: true })
    bailleurPersUrgence: string
    @Column({ length: 65, nullable: true })
    bailleurTelUrgence: string
    @Column({ length: 65, nullable: true })
    bailleurRelationUrgence: string
    @Column({ length: 65 })
    bailleurlienCNI: string
    @Column({ length: 65 })
    bailleurLienPhoto: string

    @ManyToOne(
        type => BanqueEntity,
        (banque) => banque.bailleurs,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    banque: BanqueEntity;

    @OneToMany(
        type => ProprieteEntity,
        (propriete) => propriete.bailleur
    )
    proprietes: ProprieteEntity[];
}

/*
model Bailleur {
    proprietes              Propriete[] @relation("bailleur_proprietes")
    locataires              Locataire[] @relation("bailleur_locataires")
}*/
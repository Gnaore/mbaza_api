import { LocataireEntity } from "src/locataire/locataire.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Provision")
export class ProvisionEntity {
    @PrimaryGeneratedColumn()
    id: number
    @PrimaryColumn()
    @Column({length: 64})
    mois: string
    @PrimaryColumn()
    @Column()
    annee: number
    @Column()
    nummois: number
    @Column({default: false})
    status: boolean
    @Column()
    idWave: string
    @Column()
    idWaveCallback: string
    @Column()
    amount: string
    @Column({ nullable: true})
    when_completed: Date
    @Column({ nullable: true})
    relance: Date
    
   @ManyToOne(
    type =>LocataireEntity, 
    (locataire) => locataire.provisions)
   locataire: LocataireEntity;

}
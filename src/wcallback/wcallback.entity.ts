import { type } from "os";
import { BailleurEntity } from "src/bailleur/bailleur.entity";
import { LocataireEntity } from "src/locataire/locataire.entity";
import { ProprieteEntity } from "src/propriete/propriete.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Wcallback")
export class WcallbackEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({unique: true})
    idWave: string
    @Column()
    idWaveCallback: string
    @Column()
    amount: string
    @Column({ length: 65 })
    checkout_status: string
    @Column({ length: 15 })
    currency: string
    @Column({ length: 65 })
    payment_status: string
    @Column()
    wave_launch_url: string
    @Column({ nullable: true})
    when_completed: Date
    @Column()
    when_created: Date
    @Column()
    when_expires: Date
    @Column({length: 65})
    @JoinColumn()
    locataireRef: string
    @Column({ length: 65 })
    loyer_mois: string

    @ManyToOne(
        type => ProprieteEntity,
        (propriete) => propriete.wcallbacks,
    )
    propriete: ProprieteEntity;

    @ManyToOne(
        type => BailleurEntity,
        (bailleur) => bailleur.wcallbacks, 
    )
    bailleur: BailleurEntity

}
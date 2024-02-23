import { IsNotEmpty } from "class-validator";
import { type } from "os";
import { BailleurEntity } from "src/bailleur/bailleur.entity";
import { TimestampEntities } from "src/generics/timestampEmtities";
import { MsgEntity } from "src/msg/msg.entity";
import { ProprieteEntity } from "src/propriete/propriete.entity";
import { ProvisionEntity } from "src/provision/provision.entity";
import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Locataire')
export class LocataireEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    locataireId: number
    @IsNotEmpty()
    @Column({ length: 65 })
    @Index({ unique: true })
    @JoinColumn()
    locataireRef: string
    @IsNotEmpty()
    @Column()
    locataireNom: string
    @IsNotEmpty()
    @Column()
    locataireDatenais: Date
    @IsNotEmpty()
    @Column()
    locataireDateentre: Date
    @IsNotEmpty()
    @Column({ length: 65 })
    locataireNationalite: string
    @IsNotEmpty()
    @Column({ length: 65 })
    locataireTel: string
    @Column({ length: 225, nullable: true })
    locataireEmail: string
    @IsNotEmpty()
    @Column()
    locataireSituationmatri: string
    @Column({ default: 0 })
    locataireNbrecharge: number
    @Column({ length: 65 })
    locataireTypecontrat: string
    @Column({ length: 255 })
    locataireProfession: string
    @Column({ default: 0 })
    locataireSalaire: number
    @Column({ length: 65 })
    locataireBanque: string
    @Column()
    locataireNomgarant: string
    @Column()
    locataireTelgarant: string
    @Column()
    locataireEmailgarant: string
    @Column()
    locatairePhoto: string
    @IsNotEmpty()
    @Column()
    locataireQrcode: string
    @IsNotEmpty()
    @Column()
    locataireCaution: number

    @OneToOne(
        type => ProprieteEntity,
        (propriete) => propriete.locataire,
        {
            nullable: true,
            cascade: true
        })
    @JoinColumn()
    propriete: ProprieteEntity

    @ManyToOne(
        type => BailleurEntity,
        (bailleur) => bailleur.locataires,
        {
            nullable: true,
        }
    )
    bailleur: BailleurEntity

    @OneToMany(
        type => ProvisionEntity,
        (provision) => provision.locataire)
        provisions: ProvisionEntity[];

}

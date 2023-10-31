import { BailleurEntity } from "src/bailleur/bailleur.entity";
import { TimestampEntities } from "src/generics/timestampEmtities";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('User')
export class UserEntity extends TimestampEntities {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column({ length: 65 })
    username: string;
    @Column({ length: 255 })
    email: string;
    @Column({ length: 65 })
    password: string;
    @Column({ length: 255 })
    contact: string;
    @Column({ length: 65 })
    role: string;
    @Column({ type: 'boolean', default: true })
    statut = true;
    @Column()
    paysId: number;
    @Column({ length: 255 })
    lienphoto: string


    @OneToOne(
        type => BailleurEntity,
        (bailleur) => bailleur.user,
        {
            nullable: true,
            cascade: true
        })
    @JoinColumn()
    bailleur: BailleurEntity
}
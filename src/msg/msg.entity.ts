import { TimestampEntities } from "src/generics/timestampEmtities";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Msg')
export class MsgEntity extends TimestampEntities{
    @PrimaryGeneratedColumn()
    msgId: number 
    @Column()
    msgObjet: string
    @Column()
    msgMessage: string
    @Column({default: false})
    msgLu: boolean
    @CreateDateColumn()
    msgDate: Date
    @Column()
    expediteurId: number
    @Column()
    destinataireId: number
}

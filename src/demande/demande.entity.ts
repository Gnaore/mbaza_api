import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Demande')
export class DemandeEntity {
  @PrimaryGeneratedColumn()
  demandeId: number;
  @Column()
  demandeBesoin: string;
  @Column()
  demandeNomprenoms: string;
  @Column()
  demandeEmail: string;
  @Column()
  demandeTel: string;
  @Column()
  demandeMessage: string;
  @Column({ default: 0 })
  demandelu: number;
  @Column()
  demandeDate: Date;
}

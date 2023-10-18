import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Banque')
export class BanqueEntity {
@PrimaryGeneratedColumn()
banqueId: number


}


/*
model Banque {
    banqueId      Int        @id @default(autoincrement())
    banqueCode    String     @unique @db.VarChar(8)
    libelleBanque String     @db.VarChar(255)
    sigleBanque   String     @db.VarChar(65)
    contactBanque String     @db.VarChar(65)
    createdAt     DateTime   @default(now())
    updatedAt     DateTime   @updatedAt
    bailleurs     Bailleur[] @relation("banque_bailleurs")
    paysId        Int
    pays          Pays       @relation("pays_baques", fields: [paysId], references: [paysId], onDelete: Cascade, onUpdate: Cascade)
  }*/
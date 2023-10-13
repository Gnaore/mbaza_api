import { CreateDateColumn, UpdateDateColumn } from "typeorm";


export class TimestampEntities{
    @CreateDateColumn({
        update: false
    })
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @CreateDateColumn()
    deletedAt: Date;
}
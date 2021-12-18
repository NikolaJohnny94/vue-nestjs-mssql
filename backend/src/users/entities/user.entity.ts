import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { nullable: false })
    firstname: string;

    @Column('varchar', { nullable: false })
    lastname: string;

    @Column('varchar', { unique: true, nullable: false })
    email: string;

    @Column('varchar', { nullable: false })
    country: string;

    @Column('varchar', { nullable: false })
    city: string;

}
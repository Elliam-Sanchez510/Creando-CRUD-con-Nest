import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type: 'text'})
    name:string;

    @Column({type:'text'})
    lastName:string;

    @Column({type: 'text',})
    address:string;

    @Column({type:'numeric'})
    phone:number;

    @Column({type:'text'})
    email:string;

}

import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {Auto} from "../auto/auto.entity";
import {Usuario} from "../usuario/usuario.entity";

@Entity()
export class Conductor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    nombre: string;

    @Column({ length: 30 })
    apellido: string;

    @Column('date')
    fechaNacimiento: Date;

    @Column('int')
    numeroMedallas: number;

    @Column()
    campeonActual: boolean;

    @OneToMany(type => Auto, auto => auto.conductor)
    autos: Auto[];

    @ManyToOne(type=>Usuario, usuario=>usuario.conductores)
    usuario: Usuario;
}
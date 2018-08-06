
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Conductor} from "../conductor/conductor.entity";
import {PeticionEntity} from "./peticion.entity";


@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    nick: string;

    @Column({length: 30})
    password: string;

    @OneToMany(type => Conductor, conductor=>conductor.usuario)
    conductores: Conductor[];

    @OneToMany(type => PeticionEntity, peticion=>peticion.usuarioSolicita)
    solicitudes: PeticionEntity[];

    @OneToMany(type => PeticionEntity, peticion=>peticion.usuarioOfrece)
    ofrecimientos: PeticionEntity[];

}
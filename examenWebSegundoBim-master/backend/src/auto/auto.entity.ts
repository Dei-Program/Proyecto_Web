
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {Conductor} from "../conductor/conductor.entity";
import {PeticionEntity} from "../usuario/peticion.entity";

@Entity()
export class Auto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    chasis: string;

    @Column({length: 30})
    nombreMarca: string;

    @Column({length: 30})
    colorUno: string;

    @Column({length: 30})
    colorDos: string;

    @Column({length: 30})
    nombreModelo: string;

    @Column('int')
    anio: number;

    @ManyToOne(type=>Conductor, conductor=>conductor.autos)
    conductor: Conductor;

    @OneToMany(type => PeticionEntity, peticion => peticion.autoOfrecido)
    peticionesOfrecidas: PeticionEntity[];

    @OneToMany(type => PeticionEntity, peticion => peticion.autoSolicitado)
     peticionesSolicitadas:PeticionEntity[];
}
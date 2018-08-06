import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Auto} from "../auto/auto.entity";
import {Usuario} from "./usuario.entity";

@Entity()
export class PeticionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type=>Auto, auto=>auto.peticionesSolicitadas)
    autoSolicitado: Auto;

    @ManyToOne(type=>Auto, auto=>auto.peticionesOfrecidas)
    autoOfrecido: Auto;

    @ManyToOne(type => Usuario, usuario=>usuario.solicitudes)
    usuarioSolicita: Usuario;


    @ManyToOne(type => Usuario, usuario=>usuario.ofrecimientos)
    usuarioOfrece: Usuario;
}

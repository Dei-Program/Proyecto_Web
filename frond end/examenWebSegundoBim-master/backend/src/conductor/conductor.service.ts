import {Injectable} from "@nestjs/common";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
import {InjectRepository} from "@nestjs/typeorm";
import {Conductor} from "./conductor.entity";
import {Like, Repository} from "typeorm";

@Injectable()
export class ConductorService {

    constructor(@InjectRepository(Conductor)
                private readonly conductorRepository: Repository<Conductor>,)
    {}

    agregarConductor(nombres, apellidos, fechaNacimiento, numeroMedallas,
                     campeonActual){
        const conductor=new Conductor();
        conductor.nombre=nombres;
        conductor.apellido=apellidos;
        conductor.fechaNacimiento=fechaNacimiento;
        conductor.numeroMedallas=numeroMedallas;
        conductor.campeonActual=campeonActual;

        this.conductorRepository.save(conductor);

        return conductor;
    }

    async mostrarConductores():Promise<Conductor[]>{
        return await this.conductorRepository.find();
    }

    async mostrarConductoresBuscados(palabraBusqueda:String):Promise<Conductor[]>{
        // const opciones={
        //     nombre: Like('%'+palabraBusqueda+'%'),
        // };
        // return await this.conductorRepository
        //     .find( opciones);

        return await this.conductorRepository
            .createQueryBuilder("conductor")
            .where("upper(conductor.nombre) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .orWhere("upper(conductor.apellido) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .getMany();
    }

    async obtenerConductor(indice:number):Promise<Conductor>{
        return  await this.conductorRepository.findOne(indice);

    }


    async obtenerAutos(indice: number){
        return await this.conductorRepository.findOne(indice,{relations:["autos"]})
    }

}

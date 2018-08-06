import {Injectable} from '@nestjs/common'
import {ConductorService} from "../conductor/conductor.service";
import {Repository} from "typeorm";
import {Conductor} from "../conductor/conductor.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Auto} from "./auto.entity";

@Injectable()
export class AutoService{

    constructor(private _conductorService:ConductorService,
                @InjectRepository(Auto)
                private readonly autoRepository: Repository<Auto>,)
    {}

    async buscarAutos(palabraBusqueda){
        const autos= await  this.autoRepository
            .createQueryBuilder("autos")
            .where("upper(autos.chasis) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .orWhere("upper(autos.nombreMarca) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .orWhere("upper(autos.nombreModelo) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .getMany();

        return autos;
    }
    listarAutos():Promise<Auto[]>{
        return this.autoRepository.find();
    }

    async agregarAuto(chasis, nombreMarca, colorUno, colorDos, nombreModelo, anio, idConductor) {
        const auto=new Auto();
        auto.chasis=chasis;
        auto.nombreMarca=nombreMarca;
        auto.colorUno=colorUno;
        auto.colorDos=colorDos;
        auto.nombreModelo= nombreModelo;
        auto.anio=anio;
        auto.conductor=await this._conductorService.obtenerConductor(idConductor);

        this.autoRepository.save(auto);
        return auto;
    }


    async obtenerAuto(indice: number):Promise<Auto> {
        return await this.autoRepository.findOne(indice,{relations:["conductor"]});
    }


    async cambiarAutos(idOfrecido, idSolicitado) {
        const autoOfrecido = await this.autoRepository.findOne(idOfrecido,{relations:["conductor"]});
        const autoSolicitidado = await this.autoRepository.findOne(idSolicitado,{relations:["conductor"]});

        const conductorOfrecido=autoOfrecido.conductor;
        const conductorSolicitado=autoSolicitidado.conductor;
        console.log("autoofreceido: ",autoOfrecido);
        console.log("conductorfreceido: ",conductorOfrecido);
        console.log("autooSol: ",autoSolicitidado);
        console.log("ConductSoli: ",conductorSolicitado);

        autoOfrecido.conductor=conductorSolicitado;
        autoSolicitidado.conductor=conductorOfrecido;

//        console.log("autoofreceidoDEspues: ",autoOfrecido);

        this.autoRepository.save(autoSolicitidado);
        this.autoRepository.save(autoOfrecido);


        return "auto asignado"
    }

    async peticiones(identificador){

        return await this.autoRepository
            .findOne(identificador,
                {relations:["peticionesOfrecidas","peticionesSolicitadas"]})

    }
}
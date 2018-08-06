import {Injectable} from "@nestjs/common";
import {AutoService} from "../auto/auto.service";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {PeticionEntity} from "./peticion.entity";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class PeticionService {
    constructor(private autoService:AutoService,
                private ususarioServicio:UsuarioService,
                @InjectRepository(PeticionEntity)
                private readonly peticionRepository: Repository<PeticionEntity>,){
    }

    async crearPeticion(idAutoOfrecido,idAutoSolicitado,idPoseedor,idOfrece){
        const peticion= new PeticionEntity();
        peticion.autoSolicitado=await this.autoService.obtenerAuto(idAutoOfrecido);
        peticion.autoOfrecido= await  this.autoService.obtenerAuto(idAutoSolicitado);
        peticion.usuarioOfrece= await this.ususarioServicio.obtener(idOfrece);
        peticion.usuarioSolicita= await this.ususarioServicio.obtener(idPoseedor);

        this.peticionRepository.save(peticion);

        return "peticion creada";
    }
    async obtener(idPeticion){
        return await this.peticionRepository.findOne(idPeticion,
            {relations:["autoSolicitado","autoOfrecido"]});
    }

    async aceptarPeticion(idPeticion){
        const peticion=await this.obtener(idPeticion);

        console.log("peticion", peticion);
        const solicitado= peticion.autoSolicitado;
        const ofrecio=peticion.autoOfrecido;

        console.log("envio: ", solicitado,ofrecio);

        const cambio=this.autoService.cambiarAutos(solicitado,ofrecio);

        const peticiones= await  this.peticionRepository.find();
        peticiones.forEach((p)=>{
            if(p.autoSolicitado==solicitado){
                this.peticionRepository.remove(p);
            }
                });

        return cambio;
    }

    async rechazarPeticion(idPeticion){
        const peticion=await this.peticionRepository.findOne(idPeticion);

        return await this.peticionRepository.remove(peticion);


    }
}
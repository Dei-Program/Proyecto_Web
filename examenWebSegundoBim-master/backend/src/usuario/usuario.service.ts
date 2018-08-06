import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Usuario} from "./usuario.entity";
import {Injectable} from "@nestjs/common";
import {PeticionEntity} from "./peticion.entity";
import {AutoService} from "../auto/auto.service";
import {ConductorService} from "../conductor/conductor.service";

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(Usuario)
                private readonly usuarioRepository: Repository<Usuario>,
                private _autoService:AutoService,
                private _condcutorService:ConductorService)
    {}

    async obtener(identificador){
        return await this.usuarioRepository.findOne(identificador);
    }

    async listarTodos(){
        return await this.usuarioRepository.find();
    }

    async existeUsuario(usuarionick, password){
        const usuario = await this.usuarioRepository
            .findOne({nick:usuarionick, password:password});

        console.log(usuario)

        if(usuario)
            return usuario.id;
        else
            return false;
    }
    async obtenerUsuario(idUsuario){
        return await this.usuarioRepository.findOne(idUsuario,{relations:["conductores"]});
    }

    crearUsuario(usuarionick, password){
        const usuario= new Usuario();
        usuario.nick=usuarionick;
        usuario.password=password;

        this.usuarioRepository.save(usuario);
    }

    async obtenerConductor(idUsuario:number){
        const conductores= await this.usuarioRepository.findOne(idUsuario,{relations:["conductores"]});

        return conductores;
    }

    async obtenerSolicitudes(identificador){
        const usuario=await this.usuarioRepository.findOne(identificador,
            {relations:["solicitudes"]});
        const solicitudes=usuario.solicitudes;

        return solicitudes;

    }

    async obtenerOfrecimientos(identificador){
        const usuario=await this.usuarioRepository.findOne(identificador,
            {relations:["ofrecimientos"]});
        const ofrecimientos=usuario.ofrecimientos;

        return ofrecimientos;
    }

    async buscarUsuarios(palabraBusqueda){
        const usuarios= await  this.usuarioRepository
            .createQueryBuilder("usuarios")
            .where("upper(usuarios.nick) like :nombre", {nombre: '%' + palabraBusqueda.toUpperCase() + '%' })
            .getMany();

        return usuarios;
    }

    async  obtenerPorAuto(idAuto){
        const auto:any= await this._autoService.obtenerAuto(idAuto);
        const conductor:any=await this._condcutorService.obtenerConductor(auto.conductor.id);

        return {idUsuario:conductor.usuario.id};
    }

}
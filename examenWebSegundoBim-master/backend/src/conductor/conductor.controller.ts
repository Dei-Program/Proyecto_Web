import {Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import { ConductorService} from "./conductor.service";
import {Conductor_Guardar_Schema} from "./conductor.schema";
import {Indice_Schema} from "../auto/auto.schema";
import {ValidaPipe} from "../pipes/valida.pipe";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
import {Conductor} from "./conductor.entity";
import {UsuarioService} from "../usuario/usuario.service";


@Controller('Conductor')
export class ConductorController {
    constructor(private _conductorService:ConductorService,
                private  _usuarioService:UsuarioService){}

    @Get('listarTodos')
    async listarTodos(){
        return await this._conductorService.mostrarConductores()
    }

    @Post('buscar')
    async listarTodosBuscados(@Body('palabraBusqueda') palabraBusqueda){
        return await this._conductorService.mostrarConductoresBuscados(palabraBusqueda);
    }

    @Post('crear')
    crearConductor(@Body(new ValidaPipe(Conductor_Guardar_Schema))bodyParams){

        return this._conductorService.agregarConductor(bodyParams.nombres,
            bodyParams.apellidos,
            bodyParams.fechaNacimiento,
            bodyParams.numeroMedallas,
            bodyParams.campeonActual);
    }

    @Get('obtenerPorIdConductor/:indice')
    async obtenerUno(@Param(new ValidaPipe(Indice_Schema))Params){

        const conductor =await this._conductorService.obtenerConductor(Params.indice);
        console.log(conductor);
        if(conductor){
            return conductor;
        }else{
            throw new NoEncontradoException(
                "Conductor no encontrado",
                "",
                4)
        }
    }

    @Get('obtenerPorUsuario')
    async obtenerConductor(@Query('idUsuario')idUsuario){
        return await this._usuarioService.obtenerConductor(idUsuario);
    }

    @Post('obtenerAutos')
    async obtenerAutos(@Body('identificador')identificadar){
        return await this._conductorService.obtenerAutos(identificadar);
    }
}
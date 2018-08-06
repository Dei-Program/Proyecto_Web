import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('Usuario')
export class UsuarioController {

    constructor( private usuarioService:UsuarioService){}

    @Get('todos')
    async listarUsuario(){
        return await this.usuarioService.listarTodos();
    }


    @Post('crear')
    async crearUsuario(@Body()bodyParamas) {
        return this.usuarioService
            .crearUsuario(bodyParamas.usuario, bodyParamas.password);
    }

    @Post('buscar')
    async buscarUsuario(@Body('palabraBusqueda')palabraBusqueda){
        return await this.usuarioService.buscarUsuarios(palabraBusqueda);
    }

    @Post('solicitudes')
    async solicitudes(@Body('identificador')identificador){
        return await  this.usuarioService.obtenerSolicitudes(identificador)
    }

    @Post('ofrecimientos')
    async ofrecmientos(@Body('identificador')identificador){
        return await  this.usuarioService.obtenerOfrecimientos(identificador)
    }

    @Post('obtener')
    async obtener(@Body('idUsuario')idUsuario){
        return await  this.usuarioService.obtenerUsuario(idUsuario);
    }

    @Post('obtenerPorAuto')
    async obtnerPorAuto(@Body('idAuto')idAuto){
        return await this.usuarioService.obtenerPorAuto(idAuto);
    }
}
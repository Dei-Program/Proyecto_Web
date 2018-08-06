import {Body,  Controller, Get, Post, Query} from "@nestjs/common";
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

    @Get('buscar')
    async buscarUsuario(@Query('palabraBusqueda')palabraBusqueda){
        return await this.usuarioService.buscarUsuarios(palabraBusqueda);
    }

    @Get('solicitudes')
    async solicitudes(@Query('identificador')identificador){
        return await  this.usuarioService.obtenerSolicitudes(identificador)
    }

    @Get('ofrecimientos')
    async ofrecmientos(@Query('identificador')identificador){
        return await  this.usuarioService.obtenerOfrecimientos(identificador)
    }

    @Post('obtener')
    async obtener(@Body('idUsuario')idUsuario){
        return await  this.usuarioService.obtenerUsuario(idUsuario);
    }
}
import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";
import {UsuarioService} from "../usuario/usuario.service";


@Controller('Autorizacion')
export class AutorizacionController {

    constructor(private _usuarioService:UsuarioService){

    }

    @Post('iniciarSesion')
    async iniciarSesion(@Body()bodyParamas,
                        @Res()res){
        const usuarioID:any=await this._usuarioService.existeUsuario(bodyParamas.usuario,bodyParamas.password);
        if(usuarioID){
            const mensaje={idUsuario:usuarioID};
            const parametros={nombre:'cookieID',
                valor:usuarioID}

            res.cookie(parametros.nombre,parametros.valor);
            return res.send(mensaje);
        }

        return res.send('Usuario incorrecto');
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res()res){
        const mensaje={mensaje:'Usted salio del sistema'};
        const parametros={nombre:'cookieID',
            valor:undefined}

        res.cookie(parametros.nombre,parametros.valor);
        return res.send(mensaje);

    }

    @Get('obtenerID')
    obtenerID(@Req() req){
        const idCookie=req.cookie['cookieID'];
        console.log("idCookie",idCookie);
        return {identificador:idCookie};
    }
}
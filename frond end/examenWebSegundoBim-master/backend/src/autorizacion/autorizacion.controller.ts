import {Body, Controller, Post, Res} from "@nestjs/common";
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
            const parametros={nombre:'token',
                valor:bodyParamas.usuario}

            res.cookie(parametros.nombre,parametros.valor);
            return res.send(mensaje);
        }

        return res.send('Usuario incorrecto');
    }

    @Post('cerrarSesion')
    cerrarSesion(@Res()res){
        const mensaje={mensaje:'Usted salio del sistema'};
        const parametros={nombre:'token',
            valor:undefined}

        res.cookie(parametros.nombre,parametros.valor);
        return res.send(mensaje);

    }


}
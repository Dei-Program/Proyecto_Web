import {Body, Controller, Get, Param, Post, Put, Query, Res} from "@nestjs/common";
import {AutoService} from "./auto.service";
import {Auto_Editar_Schema, Auto_Guardar_Schema, Indice_Schema} from "./auto.schema";
import {ValidaPipe} from "../pipes/valida.pipe";
import {NoEncontradoException} from "../exceptions/no-encontrado.exception";
import {tryCatch} from "rxjs/internal/util/tryCatch";
import {ConductorService} from "../conductor/conductor.service";


@Controller('Auto')
export class AutoController {
    constructor(private _autoService:AutoService,
                private  conductorService:ConductorService){}

    @Get('listar')
    listarTodos(){
        return this._autoService.listarAutos();
    }

    @Post('crear')
    crearAuto(@Body(new ValidaPipe(Auto_Guardar_Schema))bodyParams){

        return this._autoService.agregarAuto(bodyParams.chasis,
            bodyParams.nombreMarca,
            bodyParams.colorUno,
            bodyParams.colorDos,
            bodyParams.nombreModelo,
            bodyParams.anio,
            bodyParams.idConductor);
    }

    @Get('obtenerPorIdAuto/:indice')
    obtenerUno(@Param(new ValidaPipe(Indice_Schema))Params){

        if(this._autoService.obtenerAuto(Params.indice)){
            return this._autoService.obtenerAuto(Params.indice);
        }else{
            throw new NoEncontradoException(
                "Auto no encontrado",
                "",
                4
            );
        }
    }

    @Get('obtenerPorConductor')
    async obtenerPorConductor(@Query('idConductor') idConductor){
        const autos=await this.conductorService.obtenerAutos(idConductor);
        if(autos){
            return autos;
        }else{
            throw new NoEncontradoException(
                "Auto no encontrado",
                "",
                4
            );
        }
    }

    @Get('buscar')
    async buscarAuto(@Query('palabraBusqueda')palabraBusqueda){
        return await this._autoService.buscarAutos(palabraBusqueda);
    }
}
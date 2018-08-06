import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {PeticionService} from "./peticion.service";

@Controller('Peticion')
export class PeticionesController {

    constructor(private peticionService:PeticionService){
    }

    @Post('aceptar')
    async aceptarPeticion(@Body('identificador')identificador){
        return await this.peticionService.aceptarPeticion(identificador);
    }

    @Post('rechazar')
    async rechazarPeticion(@Body('identificador')identificador){
         return await this.peticionService.rechazarPeticion(identificador);

    }

    @Post('crear')
    async crear(@Body('idAutoOfrecido')idAutoOfrecido,
          @Body('idAutoSolicitado')idAutoSolicitado,
          @Body('idPoseedor')idPoseedor,
          @Body('idOfrece')idOfrece,){
        return await this.peticionService.crearPeticion(idAutoOfrecido,idAutoSolicitado,idPoseedor,idOfrece);
    }

    @Post('obtener')
    async obtener(@Body('identificador')identificador){
        return await this.peticionService.obtener(identificador);
    }
}
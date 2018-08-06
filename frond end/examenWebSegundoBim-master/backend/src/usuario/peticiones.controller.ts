import {Controller, Get, Query} from "@nestjs/common";
import {PeticionService} from "./peticion.service";

@Controller('Peticion')
export class PeticionesController {

    constructor(private peticionService:PeticionService){
    }

    @Get('aceptar')
    async aceptarPeticion(@Query('identificador')identificador){
        return await this.peticionService.aceptarPeticion(identificador);
    }

    @Get('rechazar')
    async rechazarPeticion(@Query('identificador')identificador){
         return await this.peticionService.rechazarPeticion(identificador);

    }

    @Get('crear')
    async crear(@Query('idAutoOfrecido')idAutoOfrecido,
          @Query('idAutoSolicitado')idAutoSolicitado,
          @Query('idPoseedor')idPoseedor,
          @Query('idOfrece')idOfrece,){
        return await this.peticionService.crearPeticion(idAutoOfrecido,idAutoSolicitado,idPoseedor,idOfrece);
    }

    @Get('obtener')
    async obtener(@Query('identificador')identificador){
        return await this.peticionService.obtener(identificador);
    }
}
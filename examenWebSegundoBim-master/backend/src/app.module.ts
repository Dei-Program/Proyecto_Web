import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConductorController} from "./conductor/conductor.controller";
import {AutoController} from "./auto/auto.controller";
import {AutorizacionController} from "./autorizacion/autorizacion.controller";
import {ConductorService} from "./conductor/conductor.service";
import {AutoService} from "./auto/auto.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Conductor} from "./conductor/conductor.entity";
import {Auto} from "./auto/auto.entity";
import {UsuarioService} from "./usuario/usuario.service";
import {Usuario} from "./usuario/usuario.entity";
import {PeticionEntity} from "./usuario/peticion.entity";
import {UsuarioController} from "./usuario/usuario.controller";
import {PeticionesController} from "./usuario/peticiones.controller";
import {PeticionService} from "./usuario/peticion.service";

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'examenWeb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
  }),TypeOrmModule.forFeature([Conductor,Auto,Usuario,PeticionEntity])],
  controllers: [AppController,ConductorController,AutoController,AutorizacionController,UsuarioController,PeticionesController],
  providers: [AppService,ConductorService,AutoService,UsuarioService,PeticionService],
})
export class AppModule {}

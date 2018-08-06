import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import * as Joi from 'joi';

import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";

@Injectable()
export class ValidaPipe implements PipeTransform{
    constructor(private readonly _schema ){}

    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata
    ){

        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest,
            this._schema
        );
        if(error){
            throw new PeticionInvalidaException(
                'Peticion invalida',
                error,
                4
            );
        }
        return valorEnBrutoDelRequest;
    }

}

import {HttpException, HttpStatus} from "@nestjs/common";

export class NoEncontradoException extends HttpException {
    constructor(private _mensaje,
                private _detalle,
                private _nivelError) {

        super(
            {
                mensaje: _mensaje,
                detalle: _detalle,
                nivelError: _nivelError,
                status: HttpStatus.NOT_FOUND
            }, // Mensaje u Objeto
            HttpStatus.NOT_FOUND// StatusCode
        );
    }
}
import * as Joi from 'joi';

export const Auto_Guardar_Schema = Joi.object().keys({
    chasis: Joi.string().required().max(15).regex(/^[A-za-z0-9]+$/),
    nombreMarca:Joi.string().required().max(15).regex(/^[A-za-z0-9]+$/),
    colorUno:Joi.string().required().max(15).regex(/^[A-za-z0-9]+$/),
    colorDos:Joi.string().required().max(15).regex(/^[A-za-z0-9]+$/),
    nombreModelo:Joi.string().required().max(30).regex(/^[A-za-z0-9\s]+$/),
    anio:Joi.number().required(),
    idConductor:Joi.number().required()
});

export const Auto_Editar_Schema = Joi.object().keys({
    chasis:Joi.string().max(15).regex(/^[A-za-z0-9]+$/).optional(),
    nombreMarca:Joi.string().max(15).regex(/^[A-za-z0-9]+$/).optional(),
    colorUno:Joi.string().max(15).regex(/^[A-za-z0-9]+$/).optional(),
    colorDos:Joi.string().max(15).regex(/^[A-za-z0-9]+$/).optional(),
    nombreModelo:Joi.string().max(30).regex(/^[A-za-z0-9\s]+$/).optional(),
    anio:Joi.number().optional(),
    idConductor:Joi.number().optional()
});

export const Indice_Schema=Joi.object().keys({
    indice:Joi.number()
});
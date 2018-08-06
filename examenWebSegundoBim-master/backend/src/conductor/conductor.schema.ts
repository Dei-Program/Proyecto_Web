import * as Joi from 'joi';

export const Conductor_Guardar_Schema= Joi.object().keys({
    nombres:Joi.string().regex(/^[a-zA-Z]{3,15}([\s][a-zA-Z]{3,15})*$/).max(31).required(),
    apellidos:Joi.string().regex(/^[a-zA-Z]{3,15}([\s][a-zA-Z]{3,15})*$/).max(31).required(),
    fechaNacimiento:Joi.string().required(),
    numeroMedallas:Joi.number().required(),
    campeonActual:Joi.boolean().required(),
});

export const Conductor_Editar_Schema= Joi.object().keys({
    nombres:Joi.string().regex(/^[a-zA-Z]{3,15}([\s][a-zA-Z]{3,15})*$/).max(31).optional(),
    apellidos:Joi.string().regex(/^[a-zA-Z]{3,15}([\s][a-zA-Z]{3,15})*$/).max(31).optional(),
    fechaNacimiento:Joi.date().optional(),
    numeroMedallas:Joi.number().optional(),
    campeonActual:Joi.boolean().optional(),

});
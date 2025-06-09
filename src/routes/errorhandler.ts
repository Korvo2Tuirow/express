import { ErrorRequestHandler, RequestHandler } from "express";// Importando o tipo RequestHandler do Express
// Esse tipo é usado para definir funções que atuam como middleware ou manipuladores de rotas

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({
        message: 'Recurso não encontrado',
    });
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        message: 'Ocorreu um erro interno no servidor',
         });
};
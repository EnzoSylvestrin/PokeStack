import nextConnect from "next-connect";
import databaseMiddleware from "./Middleware";

export function createHandler(...middleware: any[]) {
    return nextConnect({
        onError: (err, req, res : any, next) => {
            console.error(err.stack);
            res.status(500).end("Ocorreu um erro");
        },
        onNoMatch: (req, res) => {
            res.status(404).end("Arquivo não encontrado!");
        },
    }).use(databaseMiddleware, ...middleware);  
}
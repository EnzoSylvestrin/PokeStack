import nextConnect from "next-connect";
import databaseMiddleware from "./Middleware";

export function createHandler(...middleware: any[]) {
    return  nextConnect().use(databaseMiddleware, ...middleware);  
}
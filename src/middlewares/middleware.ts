import { RequestHandler } from "express";

const Middleware: RequestHandler = (req, res, next) => {
   
    console.log("Ok");
   
    next();
}
 
export default Middleware;
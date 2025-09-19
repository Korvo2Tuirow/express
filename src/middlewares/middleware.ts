
import { RequestHandler } from "express";

const Middleware: RequestHandler = (req, res, next) => {
   const verify = true;
   if (!verify) {
    console.log("Middleware executado!");   
    next();
   } else {
    res.status(401).send("Não autorizado!");  
    
   }
}
 

export default Middleware;
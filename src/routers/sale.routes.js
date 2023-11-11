import { Router } from "express";
import {ctrlAllSale,ctrlCreateSale} from "../controllers/sale.controller.js"

const saleRouter = Router ();

saleRouter.get( "/" , ctrlAllSale )
saleRouter.post( "/", ctrlCreateSale ) 

export {saleRouter}
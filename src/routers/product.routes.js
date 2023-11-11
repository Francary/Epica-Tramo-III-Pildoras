import { Router } from "express";
import {ctrDeleteProducts, ctrlCreateProducts, ctrlGetProducts, ctrlListProducts, ctrlUpdateProducts,} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", ctrlListProducts);
productRouter.post("/", ctrlCreateProducts);

productRouter.get("/:productId",  ctrlGetProducts);
productRouter.patch("/:productId", ctrlUpdateProducts  );
productRouter.delete("/:productId",  ctrDeleteProducts);

export { productRouter };

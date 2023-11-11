import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { configEnv } from "./src/settings/config.js";
import { startConnection } from "./src/settings/database.js";
import { userRouter } from "./src/routers/user.routes.js";
import { productRouter } from "./src/routers/product.routes.js";
import { saleRouter } from "./src/routers/sale.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use("/api/products", productRouter)
app.use("/users", userRouter);
app.use("/api/sales", saleRouter);

app.listen(configEnv.PORT, async () => {
  await startConnection();

  console.log(`Server running on port ${configEnv.PORT}`);
});

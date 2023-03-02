import something from "./service.js";
import express from "express";
import Router from "./routes/product.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(4000, () => {
  console.log("Working 4000");
});
console.log(something);

app.use(Router);

import express from "express";
import { getEmployee, getEmployees } from "../services/emp-service.js";

const Router = express.Router();

let products = [{ id: 1, name: "IPAD 1111" }];

Router.get("/products", (req, res) => {
  console.log("Get request");
  res.status(200).send("Success");
});

Router.post("/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(200).send(products);
});

Router.delete("/products", (req, res) => {
  console.log(req.body);
  products.pop(req.body); //deleteProduct(req.body)
  res.status(200).send(products);
});
export default Router;

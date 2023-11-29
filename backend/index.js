import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to Mern Stack tutorial");
});
app.listen(PORT, () => {
  console.log(`App is listening to port : ${PORT}`);
});

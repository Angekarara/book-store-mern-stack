import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to Mern Stack tutorial");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("The App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App Is Listening To Port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

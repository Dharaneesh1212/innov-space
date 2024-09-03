import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import newEmployee from "./routes/managementRoutes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(express.json());

// routes
app.use("/api/employee",newEmployee)

// mongodb
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running in http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error on connecting to database", error);
  });

import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/mongodb";
import movieRoutes from "./Routes/movieRoutes";

const app: Application = express();

const PORT = process.env.PORT;
const databaseURI = process.env.DATABASE_URI || "";

app.use(cors());

app.use("/movies", movieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1 style="color: #C7AA8D;font-size:6rem">Typescript</h1>`);
});

connectDB(databaseURI);
app.listen(PORT, () => {
  console.log("Server 8000 port dr aslaa");
});

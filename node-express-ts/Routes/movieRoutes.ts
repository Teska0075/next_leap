import { Router } from "express";
import { getMovies } from "../controller/movies";

const router = Router();

router.route("/").get(getMovies);

export default router;

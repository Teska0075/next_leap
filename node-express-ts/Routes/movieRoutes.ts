import { Router } from "express";
import { getMovies, getMovie } from "../controller/movies";

const router = Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);

export default router;

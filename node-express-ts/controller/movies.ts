import { Request, Response } from "express";
import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const total = await Movie.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit || 0;

  try {
    const movies = await Movie.find().skip(skip).limit(limit);
    res.status(200).json({
      message: "Movies",
      movies,
      pagination: { total, pageCount, page },
    });
  } catch (error) {
    console.log("ERROR ", error);
  }
};

const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.status(200).json({ message: "Movie", movie });
  } catch (error) {
    console.log("ERROR ", error);
  }
};

export { getMovies, getMovie };

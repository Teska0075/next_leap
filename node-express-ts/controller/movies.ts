import { Request, Response } from "express";
import Movie from "../model/Movie";

const getMovies = async (req: Request, res: Response) => {
  //   res.status(200).json({ success: true });
  try {
    const movies = await Movie.find({}).limit(10);
    res.status(200).json({ message: "Movies", movies });
  } catch (error) {
    console.log("ERROR ", error);
  }
};

export { getMovies };

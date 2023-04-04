import { Schema, model, NumberExpression } from "mongoose";

interface IMovie {
  plot: String;
  genres: [String];
  runtime: Number;
  rated: String;
  cast: [String];
  num_mflix_comments: Number;
  poster: String;
  title: String;
  fullplot: String;
  languages: [String];
  released: Date;
  directors: [String];
  writers: [String];
  awards: {
    wins: Number;
    nominations: Number;
    text: String;
  };
  lastupdated: String;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  countries: [String];
  type: String;
  tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
      meter: Number;
    };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<IMovie>({});
const movie = model("Movie", movieSchema);

export default movie;

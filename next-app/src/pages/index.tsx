import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Creepster } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { count } from "console";
import { useEffect, useState } from "react";
// import Count from "@/components/Count/Count";
// import Movie from "@/components/Movie";
import About from "./about";
import Pagination from "@/components/Pagination/Pagination";

// import Movie from "@/components/Movie";

const creepster = Creepster({ subsets: ["latin"], weight: ["400"] });

interface IAwards {
  wins: Number;
  nominations: Number;
  text: String;
}

interface IMovie {
  _id: String;
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
  awards: IAwards;
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

interface IPagination {
  total: Number;
  pageCount: Number;
  page: [Number];
}

interface IMOVIE {
  movies: IMovie[];
  pagination: IPagination;
}

export default function Home({ movies, pagination }: IMOVIE) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center h-full bg-black">
        <h1
          className={`text-red-600 text-9xl text-center py-20 ${creepster.className}`}
        >
          Movie Review
        </h1>
        {/* <div>
          <Link className="text-white" href="/about">
            About
          </Link>
          <br></br>
          <Link className="text-white" href="/movies/">
            Movie
          </Link>
        </div> */}

        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-5 content-between">
            {movies.map((movie, idx) => (
              <div key={idx} className="w-100 m-3 ">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-red-600/50 h-full flex flex-col justify-between pb-5">
                  <Image
                    className="h-3/5"
                    src={movie.poster || "/images/poster.jpeg"}
                    alt="asd"
                    width={600}
                    height={800}
                  />
                  <div className="container px-6 ">
                    <div className="font-bold text-xl text-white pb-5">
                      {movie.title}
                    </div>
                    <p className="text-clip text-white">{movie.plot}</p>
                    <span className="inline-block rounded-full font-semibold text-white text-bold mt-5 bottom-0">
                      <Link
                        href={`/movies/${movie._id}`}
                        className="text-red-600 mt-5"
                      >
                        Read more...
                      </Link>
                    </span>
                  </div>
                  <div className="px-6 pt-4">
                    <span className="inline-block bg-red-600 rounded-full px-3 py-1 font-semibold text-white text-lg mr-2 bottom-0">
                      🍅:{/* 🍅: {movie.tomatoes.viewer.meter || "..."}% */}
                    </span>
                    <span className="inline-block bg-yellow-400 rounded-full px-3 py-1 font-semibold text-black text-lg mr-2 mb-2">
                      IMDb: {movie.imdb.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Pagination
            total={pagination.total}
            pageCount={pagination.pageCount}
            page={pagination.page}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const { limit, page } = ctx.query;
  const res = await fetch(
    `http://localhost:8000/movies?limit=${limit}&page=${page}`
  );
  const data = await res.json();
  console.log("QUERY", ctx);

  return {
    props: { movies: data.movies, pagination: data.pagination },
  };
}

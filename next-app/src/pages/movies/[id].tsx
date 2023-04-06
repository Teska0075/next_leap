import { useRouter } from "next/router";
import React from "react";

interface IProps {
  params: [];
}

export default function Movie(props: IProps) {
  const obj = useRouter();
  console.log(obj.query);
  return <div>Movie</div>;
}

export async function getStaticPaths() {
  const ids = [1, 2, 3, 4];

  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  console.log("PARAMS ", params);

  const res = await fetch("http://localhost:8000/movies");
  const data = await res.json();

  return {
    props: { movies: data.movies },
  };
}

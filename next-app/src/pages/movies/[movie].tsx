import { useRouter } from "next/router";
import React from "react";

const movie = () => {
  const obj = useRouter();
  console.log(obj.query);
  return <div>Movie</div>;
};

export default movie;

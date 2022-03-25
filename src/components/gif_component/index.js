import React from "react";

export default function Gif({ gif, title }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={gif} alt="apaajadeh" />
    </>
  );
}

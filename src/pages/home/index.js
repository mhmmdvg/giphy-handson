import React from "react";
import { Form, Gif } from "../../components";
import gif from "../../data/gif2";
import "./styles.css";

export default function Index() {
  // Cara 1
  // const filterGif = gif.filter((g) => {
  //   return g.rating === "pg";
  // });

  return (
    <div className="container">
      <h1>Hayuk</h1>
      <Form />

      {/* Exercise Module 2 Session 2 */}
      {/* <Gif gif={gif[0].url} title={gif.title} /> */}

      {/* Cara 1 */}
      {/* {filterGif.map(({ url, title }) => (
        <Gif title={title} gif={url} />
      ))} */}

      {/* Cara 2 */}
      {gif
        .filter((gif) => gif.rating === "g")
        .map(({ id, url, title }) => (
          <Gif key={id} title={title} gif={url} />
        ))}
    </div>
  );
}

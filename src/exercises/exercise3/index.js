/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 3 - Mixins & Partials 📚

In this exercise we will learn key features in SAS that 
allows for splitting up our CSS into re-usable chunks.

1. Create a SASS mixin.
2. Add parameters to mixins.
3. Create SASS partial
4. Move re-usable code into partials.

`;

import React from "react";
import "./styles.scss";
// import "./solution/styles.scss";

const tiles = ["one", "two", "three", "four", "five", "six"];
const Lesson3 = () => {
  return (
    <section className="Tiles">
      {tiles.map(tileClass => (
        <div className={`Tiles-${tileClass}`} />
      ))}
    </section>
  );
};

export default Lesson3;

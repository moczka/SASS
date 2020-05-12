/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1 - Variables & Operators 📚

In this exercise we will learn:

1. Create SASS variables.
2. Interpolate variables.
3. Math operators in SASS.
4. How SASS variables are evaluated.
5. Practical uses of SASS variables.

`;

import React from "react";
import "./styles.scss";
// import "./solution/styles.scss";

const tiles = ["one", "two", "three", "four", "five", "six"];
const Lesson1 = () => {
  return (
    <section className="Tiles">
      {tiles.map(tileClass => (
        <div className={`Tiles-${tileClass}`} />
      ))}
    </section>
  );
};

export default Lesson1;

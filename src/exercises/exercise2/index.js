/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 2 - Nesting and The Ampersand (&) 📚

In this exercise we will learn:

1. Nesting to create CSS selectors.
2. Nesting to simplify the CSS.
3. The value of the & symbol.

`;

import React from "react";
import "./styles.scss";
// import "./solution/styles.scss";

const profiles = [
  {
    name: "Sam",
    src: "image2.png"
  },
  {
    name: "James",
    src: "image2.png"
  },
  {
    name: "Karen",
    src: "image2.png"
  }
];

const Lesson2 = () => {
  return (
    <section>
      {profiles.map(profile => (
        <div className="ProductCard">
          <div className="ProductCard-imageWrapper">
            <img className="ProductCard-image" alt={profile.name} />
            <span className="ProductCard-status" />
          </div>
          <h3 className="ProductCard-name">{profile.name}</h3>
          <p className="ProductCard-introduction">{profile.intro}</p>
        </div>
      ))}
    </section>
  );
};

export default Lesson2;

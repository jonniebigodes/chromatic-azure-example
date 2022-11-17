import React from "react";
import PropTypes from "prop-types";

export function ExampleComponent({ articleName, author, sinopsis }) {
  return (
    <div>
      <h1>{articleName}</h1>
      <h2>{author}</h2>
      <div>
        <p>{sinopsis}</p>
      </div>
    </div>
  );
}

ExampleComponent.propTypes = {
  articleName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  sinopsis: PropTypes.string,
};

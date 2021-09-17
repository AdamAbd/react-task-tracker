import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func.isRequired,
};

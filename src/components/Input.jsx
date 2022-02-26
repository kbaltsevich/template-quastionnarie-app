import React from "react";
import objectStateTree from "../helpers/objectStateTree";

function Input(props) {
  const { state, id, setState, title, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <input
        type="text"
        onChange={(e) => {
          console.log(state);
          const newState = objectStateTree(state, id, e.target.value);
          return setState(newState);
        }}
      />
    </div>
  );
}

export default Input;

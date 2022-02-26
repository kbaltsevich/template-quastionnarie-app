import React from "react";
import objectStateTree from "../helpers/objectStateTree";

function Input(props) {
  const { state, id, setState, title, description, name, type } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <input
        name={
          name
            ? `${name}_${id}_${new Date().getTime()}`
            : `${id}_${new Date().getTime()}`
        }
        type={type ? type : "text"}
        onChange={(e) => {
          const newState = objectStateTree(state, id, e.target.value);
          return setState(newState);
        }}
      />
    </div>
  );
}

export default Input;

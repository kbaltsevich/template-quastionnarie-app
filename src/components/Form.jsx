import React from "react";
import componentsRender from "../helpers/componentsRender";

function Form(props) {
  const {
    id,
    title,
    description,
    children,
    state,
    setState,
    classNameSection,
    buttonTitle,
  } = props;
  return (
    <form id={id} className={classNameSection}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children
        ? children.map((el) => componentsRender(el, state, setState))
        : null}
      <button
        onSubmit={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      >
        {buttonTitle}
      </button>
    </form>
  );
}

export default Form;

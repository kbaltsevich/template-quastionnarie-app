import React from "react";
import componentsRender from "../helpers/componentsRender";

function Section(props) {
  const { id, title, description, children, state, setState } = props;
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {children
        ? children.map((el) => componentsRender(el, state, setState))
        : null}
    </section>
  );
}

export default Section;

import React from "react";
import componentsRender from "../helpers/componentsRender";

function DivElement(props) {
  const {
    id,
    title,
    description,
    children,
    state,
    setState,
    classNameSection,
    classNameSectionButtons,
  } = props;
  return (
    <div
      id={id}
      className={
        classNameSectionButtons
          ? `${classNameSection} ${classNameSectionButtons}`
          : classNameSection
      }
    >
      <h2>{title}</h2>
      <p>{description}</p>
      {children
        ? children.map((el) => componentsRender(el, state, setState))
        : null}
    </div>
  );
}

export default DivElement;

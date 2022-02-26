import React from "react";

function componentsRender(element) {
  if (element.component === "section") {
    return <Section {...element} key={element.id} />;
  }
}

function Section(props) {
  const { id, title, description, children } = props;
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {children ? children.map(componentsRender) : null}
    </section>
  );
}

export default Section;

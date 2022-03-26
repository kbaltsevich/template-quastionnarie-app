import React from "react";

function Paragraph(props) {
  const { id, description, classNameParagraph } = props;
  return (
    <p id={id} className={classNameParagraph}>
      {description}
    </p>
  );
}

export default Paragraph;

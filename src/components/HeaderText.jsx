import React from "react";

export default function HeaderText(props) {
  const { id, title, level, classText } = props;
  return (
    <>
      {level === 1 || undefined ? (
        <h1 id={id} className={classText}>
          {title}
        </h1>
      ) : null}
      {level === 2 ? (
        <h2 id={id} className={classText}>
          {title}
        </h2>
      ) : null}
      {level === 3 ? (
        <h3 id={id} className={classText}>
          {title}
        </h3>
      ) : null}
      {level === 4 ? (
        <h4 id={id} className={classText}>
          {title}
        </h4>
      ) : null}
      {level === 5 ? (
        <h5 id={id} className={classText}>
          {title}
        </h5>
      ) : null}
      {level === 6 ? (
        <h6 id={id} className={classText}>
          {title}
        </h6>
      ) : null}
    </>
  );
}

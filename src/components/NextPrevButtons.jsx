import { React, useState } from "react";

function NextPrevButtons(props) {
  const {
    id,
    classNameSection,
    classNameSectionButtons,
    nextBtn = false,
    prevBtn = false,
    nextBtnTitle,
    prevBtnTitle,
  } = props;
  const [isNextBtn, setNextBtn] = useState(nextBtn);
  const [isPrevBtn, setPrevBtn] = useState(prevBtn);

  function clickPrevBtnFunction() {
    console.log("click prev btn");
  }

  function clickNextBtnFunction() {
    console.log("click next btn");
  }

  return (
    <div id={id} className={classNameSection}>
      {isPrevBtn ? (
        <button onClick={clickPrevBtnFunction}>{prevBtnTitle}</button>
      ) : null}
      {isNextBtn ? (
        <button onClick={clickNextBtnFunction}>{nextBtnTitle}</button>
      ) : null}
    </div>
  );
}

export default NextPrevButtons;

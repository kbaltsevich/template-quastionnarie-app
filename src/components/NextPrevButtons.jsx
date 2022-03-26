import { React, useEffect, useMemo, useState } from "react";

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
  const [countActiveSection, setActiveSection] = useState(0);

  function clickPrevBtnFunction() {
    console.log("click prev btn");
    if (countActiveSection - 1 === 0) {
      setPrevBtn(false);
      setNextBtn(true);
    } else {
      setNextBtn(true);
      setPrevBtn(true);
    }
    setActiveSection(countActiveSection - 1);

    return collectSectionButtons(countActiveSection);
  }

  function clickNextBtnFunction() {
    console.log("click next btn");
    if (
      countActiveSection + 1 ===
      document.querySelectorAll(`.${classNameSectionButtons}`).length - 1
    ) {
      setNextBtn(false);
      setPrevBtn(true);
    } else {
      setNextBtn(true);
      setPrevBtn(true);
    }
    setActiveSection(countActiveSection + 1);
    return collectSectionButtons(countActiveSection);
  }

  function collectSectionButtons(count) {
    if (classNameSectionButtons) {
      const sections = document.querySelectorAll(`.${classNameSectionButtons}`);
      sections.forEach((el) => (el.style.display = "none"));
      sections.forEach((el, index) => {
        if (index === count) {
          el.style.display = "block";
        }
      });
    } else {
      console.error("NO SECTIONS CLASS");
    }
  }

  useEffect(() => {
    collectSectionButtons(countActiveSection);
  });

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

import Section from "../components/Section";
import Input from "../components/Input";
import DivElement from "./../components/DivElement";
import Paragraph from "./../components/Paragraph";
import NextPrevButtons from "./../components/NextPrevButtons";

function componentsRender(element, state, setState) {
  if (element.component === "section") {
    return (
      <Section
        {...element}
        key={element.id}
        state={state}
        setState={setState}
      />
    );
  }
  if (element.component === "nextPrevBtn") {
    return <NextPrevButtons {...element} key={element.id} />;
  }
  if (element.component === "p") {
    return <Paragraph {...element} key={element.id} />;
  }
  if (element.component === "div") {
    return (
      <DivElement
        {...element}
        key={element.id}
        state={state}
        setState={setState}
      />
    );
  }
  if (element.component === "input") {
    return (
      <Input {...element} key={element.id} state={state} setState={setState} />
    );
  }
}

export default componentsRender;

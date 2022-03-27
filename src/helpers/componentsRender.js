import Section from "../components/Section";
import Input from "../components/Input";
import DivElement from "./../components/DivElement";
import Paragraph from "./../components/Paragraph";
import NextPrevButtons from "./../components/NextPrevButtons";
import Form from "./../components/Form";
import HeaderText from "./../components/HeaderText";

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
  if (element.component === "form") {
    return (
      <Form {...element} key={element.id} state={state} setState={setState} />
    );
  }
  if (
    element.component === "h1" ||
    element.component === "h2" ||
    element.component === "h3" ||
    element.component === "h4" ||
    element.component === "h5" ||
    element.component === "h6"
  ) {
    return (
      <HeaderText
        {...element}
        key={element.id}
        level={Number(element.component.split("")[1])}
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

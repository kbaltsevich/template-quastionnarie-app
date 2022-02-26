import Section from "../components/Section";
import Input from "../components/Input";

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
  if (element.component === "input") {
    return (
      <Input {...element} key={element.id} state={state} setState={setState} />
    );
  }
}

export default componentsRender;

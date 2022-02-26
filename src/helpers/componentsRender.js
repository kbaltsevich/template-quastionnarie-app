import Section from "../components/Section";

function componentsRender(element) {
  if (element.component === "section") {
    return <Section {...element} key={element.id} />;
  }
}

export default componentsRender;

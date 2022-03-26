import randomId from "./randomId";
const db = [
  {
    id: randomId(),
    component: "section",
    title: "I'm section",
    description: "I'm first Section",
    classNameSection: "first__section",
    classNameSectionButtons: "test",
    children: [
      {
        id: randomId(),
        component: "div",
        title: "I'm children section",
        description: "I'm first children Section",
        children: [
          {
            id: randomId(),
            component: "input",
            title: "I'm children input",
            description: "I'm first children Input",
            value: "",
          },
          {
            id: randomId(),
            component: "p",
            description: "I'm first Paragraph",
          },
          {
            id: randomId(),
            component: "p",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          },
        ],
      },
      {
        id: randomId(),
        component: "input",
        title: "I'm children input",
        description: "I'm first children Input",
        value: "",
      },
      {
        id: randomId(),
        component: "p",
        description: "I'm first Paragraph",
      },
    ],
  },
  {
    id: randomId(),
    component: "section",
    title: "I'm 2",
    description: "I'm 2 Section",
    classNameSectionButtons: "test",
  },
  {
    id: randomId(),
    component: "section",
    title: "I'm 3",
    description: "I'm 3 Section",
    classNameSectionButtons: "test",
  },
  {
    id: randomId(),
    component: "div",
    title: "I'm 3",
    description: "I'm 3 Section",
    classNameSectionButtons: "test",
  },
  {
    id: randomId(),
    component: "nextPrevBtn",
    classNameSection: null,
    nextBtn: true,
    nextBtnTitle: "next",
    prevBtnTitle: "prev",
    classNameSectionButtons: "test",
  },
];

export default db;

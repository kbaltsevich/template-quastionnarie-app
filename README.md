# This templater

This tmplater for generate page from Object.

```
{
    id: randomId(),
    component: "section",
    title: "I'm section",
    description: "I'm first Section",
    children: [
      {
        id: randomId(),
        component: "div",
        title: "I'm children section",
        description: "I'm first children Section",
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
```
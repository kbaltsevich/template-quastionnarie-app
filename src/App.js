import "./App.css";
import { React, useState } from "react";
import randomId from "./helpers/randomId";
import componentsRender from "./helpers/componentsRender";

const state = [
  {
    id: randomId(),
    component: "section",
    title: "I'm section",
    description: "I'm first Section",
    children: [
      {
        id: randomId(),
        component: "section",
        title: "I'm children section",
        description: "I'm first children Section",
      },
      {
        id: randomId(),
        component: "input",
        title: "I'm children section",
        description: "I'm first children Section",
        value: "",
      },
    ],
  },
  {
    id: randomId(),
    component: "section",
    title: "I'm 2",
    description: "I'm 2 Section",
  },
  {
    id: randomId(),
    component: "section",
    title: "I'm 3",
    description: "I'm 3 Section",
  },
];

function App() {
  const [stateAll, setStateAll] = useState(state);
  return (
    <div className="App">
      {stateAll ? (
        stateAll.map((element) =>
          componentsRender(element, stateAll, (e) => setStateAll(e))
        )
      ) : (
        <h1>No State</h1>
      )}
    </div>
  );
}

export default App;

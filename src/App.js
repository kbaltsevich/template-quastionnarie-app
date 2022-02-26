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
      {stateAll ? stateAll.map(componentsRender) : <h1>No State</h1>}
    </div>
  );
}

export default App;

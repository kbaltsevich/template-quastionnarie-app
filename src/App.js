import "./App.css";
import { React, useState } from "react";
import componentsRender from "./helpers/componentsRender";
import db from "./helpers/db";

function App() {
  const [stateAll, setStateAll] = useState(db);
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

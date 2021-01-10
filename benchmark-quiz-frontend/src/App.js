import "./App.css";
import React, { useState } from "react";
import Quizpage from "./components/Quizpage";
import Landing from "./components/Landing";
import Endinpage from "./components/Endingpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [child, setChild] = useState("");

  const handleCallback = (childData) => {
    setChild(childData);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing parentCallback={handleCallback} />
          </Route>
          <Route exact path="/start">
            <Quizpage id={child} />
          </Route>
          <Route exact path="/end">
            <Endinpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

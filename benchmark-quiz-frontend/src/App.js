import "./App.css";
import Quizpage from "./components/Quizpage";
import Landing from "./components/Landing";
import Endinpage from "./components/Endingpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/start">
            <Quizpage />
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

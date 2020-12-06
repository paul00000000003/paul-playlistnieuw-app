import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SongOverview from "../songoverview/SongOverview";
import About from "../about/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="routingUlLijstje">
              <li className="routingUlLijstjeLine">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="routingUlLijstjeLine">
                <Link to={"/about"} className="nav-link">
                  About me
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <SongOverview />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

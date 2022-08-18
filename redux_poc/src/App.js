import "./App.css";
import Form from "./Components/Form";
import PageNotFound from "./Components/PageNotFound";
import AboutUs from "./Components/AboutUs";
import PrivateRoute from "./Components/PrivateRoutes";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/form" component={Form} />
          <PrivateRoute path="/about" component={AboutUs} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

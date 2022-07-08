import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Create from "./components/Complex_Component/Create";
import BlogDetails from "./components/Complex_Component/BlogDetails";
import NptFound from "./components/NotFound";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <div className="App">
        <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
        <div className="component">
          <Switch>
            <Route exact path="/blogproject4">
              <Home isAuth={isAuth} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/login">
              <Login setIsAuth={setIsAuth} />
            </Route>
            <Route path="*">
              <NptFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

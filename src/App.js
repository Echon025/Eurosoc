import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
// import Login from "./pages/Login";
function App() {
  return (
    <Navbar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        {/* <Route path="/login" exact>
          <Login/>
        </Route> */}
      </Switch>
    </Navbar>
  );
}

export default App;

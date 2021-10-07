import "./assets/css/style.css";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { SideBar } from "./components/sideBar/header";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div>
     
      {/* <Navigation /> */}
      {/* <SideBar/> */}
      {/* <Header/> */}
      <Switch>
      <Route exact path="/sideBar" component={SideBar} />

        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route exact path="**">
          <Redirect to={{ pathname: "/" }} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

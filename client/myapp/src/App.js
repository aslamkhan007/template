import "./assets/css/style.css";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { SideBar } from "./components/header/header";
import { Home } from "./components/Home";
import { PrivateRouter } from "./HOC/ProtectedRouter/PrivateRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
    <SideBar/>
      <Switch>
        {/* <Route exact path="/register" component={Register} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRouter exact path ="/register" component ={Register}/>
        {/* <PrivateRouter exact path ="/login" component ={Login}/> */}
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="**">
          <Redirect to={{ pathname: "/" }} />
        </Route>

      </Switch>
    </>
  );
}

export default App;

import "./assets/css/style.css";

import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";

import { SideBar } from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <>
     
      <Navigation />
      {/* <SideBar/>s */}
      {/* <Header/> */}
      
      <Switch>
    

        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact path="**">
          <Redirect to={{ pathname: "/" }} />
        </Route>

      </Switch>
 
    </>
  );
}

export default App;

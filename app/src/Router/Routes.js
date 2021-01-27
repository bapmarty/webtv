import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../components/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/prog" component={Home}/>
    <Route exact path="/info" component={Home}/>
    <Route exact path="/rediff" component={Home}/>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
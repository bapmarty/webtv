import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../components/Home";

const Routes = () => (
  <Switch>
    <Route path="/live" component={Home}/>
    <Redirect path="/live" />
  </Switch>
);

export default Routes;
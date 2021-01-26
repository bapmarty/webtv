import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../components/Home";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home}/>
    <Redirect path="/" />
  </Switch>
);

export default Routes;
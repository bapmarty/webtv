import { Switch, Route, Redirect } from 'react-router-dom';

import Home from "../components/Home";
import Prog from "../components/Prog";
import Informations from '../components/Informations';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/prog" component={Prog}/>
    <Route exact path="/info" component={Informations}/>
    <Route exact path="/rediff" component={Home}/>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
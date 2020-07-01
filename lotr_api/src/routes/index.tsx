import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Detail from '../pages/detail';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/detail/:character+" component={Detail}></Route>
    </Switch>
);

export default Routes;

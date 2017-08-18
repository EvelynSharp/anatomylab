import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Quiz} />
    </Switch>
  </div>
);

export default App;

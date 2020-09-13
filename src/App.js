import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NotFound from './pages/NotFound';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        initial App
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch> */}
      </div>
    );
  }
}

export default App;

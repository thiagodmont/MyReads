import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'
import NotFound from './scenes/NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

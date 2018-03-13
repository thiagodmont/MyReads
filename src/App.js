import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './scenes/Home'
import Search from './scenes/Search'
import BookShow from './scenes/BookShow'
import NotFound from './scenes/NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {["/", "/home"].map((path, i) => <Route key={i} exact path={path} component={Home} />)}
          <Route path="/search" component={Search} />
          <Route path="/book/:id/:context" component={BookShow} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

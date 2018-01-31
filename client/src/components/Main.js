import React, { Component } from 'react';
import ListContainer from './ListContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

export default class Main extends Component {
  render() {
    let ListPage = ListContainer();
    return (
      <Router>
        <div>
          <Route exact path="/" component={ListPage}/>
        </div>
      </Router>
    );
  }
}

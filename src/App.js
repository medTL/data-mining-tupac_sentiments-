import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from './context'
import './App.css';

import Index from './components/layouts/index'
import Lyrics from './components/tracks/lyrics'

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <React.Fragment>
       
        <div className="container">
        
         <Switch>
         <Route exact path="/" component={Index} />
         <Route exact path="/lyrics/track/:id" component={Lyrics} />
         </Switch>
           
          
        </div>
        </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;

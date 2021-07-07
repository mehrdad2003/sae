import React from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom' 
import Home from './pages'
import Signin from './pages/signin'
function App() {
  return (
    <Router>
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/signin' component={Signin} exact/>
     </Switch>

    </Router>
  );
}

export default App;

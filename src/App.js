import React from 'react';
import Home from './Components/Home';
import AddAccount from './Components/AddAccount';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import EditAccount from './Components/EditAccount';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute'
import Contact from './Components/Contact';
import Infos from './Components/Infos';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
        <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <ProtectedRoute exact path="/" component={Home} />
                <Route exact path="/infos" component={Infos} />
                <ProtectedRoute exact path="/add" component={AddAccount} />
                <ProtectedRoute exact path="/edit/:id" component={EditAccount} />   
                <Route exact path="/contact" component={Contact} /> 
          </Switch>
        
      </BrowserRouter>
    );
  }
}
export default App;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './component/start';
import Opening from './component/opening';
import {BrowserRouter as  Router, Route} from 'react-router-dom';
import Login from './component/login';
import Otp from './component/otp';


function App() {
  return (
    <div className="App">
      <Router>
      <Route path={'/firstScreen'} component={Start} />
        <Route path={'/secondScreen'} component={Opening} />
        <Route path={'/login'} component={Login} />
        <Route path={'/otp'} component={Otp} />
      </Router>
    </div>
  );
}

export default App;

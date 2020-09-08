import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import Home from './layouts/Home';
import {Provider} from 'react-redux'
import store from './Redux/storeConfig/store';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Home}/>
         
        </Switch>
     
      </div>
    </Router>
    </Provider>
   
  );
}

export default App;

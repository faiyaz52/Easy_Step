import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import Home from './layouts/Home';
import {Provider} from 'react-redux'
import store from './Redux/storeConfig/store';

function App() {
  return (
    <Provider store={store}>
     <div className="App">
     <Home/>
    </div>
    </Provider>
   
  );
}

export default App;

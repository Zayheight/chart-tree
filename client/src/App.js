import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button,DatePicker,version} from 'antd';
import './index.css';
import { render } from "react-dom";
import 'react-sortable-tree/style.css';
import Nav from './Nav'
import treeDemo from './treeDemo'
import Charts from './Charts'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <Router>
      <div className="App" >
        <Nav />
        <Switch>
        <Route path="/100GB" component={treeDemo}/>
        <Route path="/Chart" component={Charts}/>
          
        </Switch>
      </div>
      </Router>
      
      
    );
  }
}
  
export default App;

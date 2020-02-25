import React, { Component } from 'react';
import './App.css';
import { Home } from './components/Home'
import { HtmlDefinition } from './components/HtmlDefinition'
import { CssDefinition } from './components/CssDefinition'
import { JsDefinition } from './components/JsDefinition'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  render() {
   /*  function Home() {
      return <h2>Home</h2>;
    }
    
    function HtmlDefinition() {
      return <h2>HtmlDefinition</h2>;
    }
    
    function CssDefinition() {
      return <h2>CssDefinition</h2>;
    }
    function CssDefinition() {
      return <h2>CssDefinition</h2>;
    }
    function JsDefinition() {
      return <h2>JsDefinition</h2>;
    } */
    return (
      <Router>
      <div >
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/HTML'>HTML</Link></li>
            <li><Link to='/CSS'>CSS</Link></li>
            <li><Link to='/JS'>JavaScript</Link></li>

          </ul>

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/HTML">
          <HtmlDefinition />
          </Route>
          <Route path="/CSS">
          <CssDefinition />
          </Route>
          <Route path="/js">
          <JsDefinition />
          </Route>
        </Switch>
 
      </div>
      </Router>
    );
  }
  
  
}


export default App;

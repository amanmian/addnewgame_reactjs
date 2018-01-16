import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link , BrowserRouter, Route } from 'react-router-dom';
import gamespage from './gamespage.js';
import gamesform from './gamesform.js';
// import loading from 'react-loaders';

// state = {
//   loading: true
// };

// componentDidMount() {
//   setTimeout(() => this.setState({ loading: false }), 1500); 
// }


class App extends Component {
  render() {
   
    return (
      <div className="ui container">
          {/* <div className="ui three item menu">
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
            <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>
          </div>
          <Route pattern="/games" component = {gamespage}/>
          <Route pattern="/games/new" component = {gamesform}/> */}

          <ul className="inlineList">
            <li className="btn" style={{padding:"10px 10px 10px 10px",backgroundColor:"#F0F0F0"}}><Link className="item" activeClassName="active" to="/">Home</Link></li>
            <li className="btn" style={{padding:"10px 10px 10px 10px",backgroundColor:"#F0F0F0"}}><Link to="/games">Games</Link></li>
            <li className="btn btn-default" style={{padding:"10px 10px 10px 10px",backgroundColor:"#F0F0F0"}}><Link to="/games/new">Add New Game</Link></li>
          </ul>


          <hr />

          {/* <Route exact path="/" >
            <Route path="/games" component={gamespage} />
            <Route path="/games/new" component={gamesform} />

          </Route> */}
          <Route path="/games" component={gamespage} />
          <Route path="/games/new" component={gamesform} />


       
      </div>
    );
  }
}

export default App;

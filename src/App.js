import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Lyrics from './components/pages/Lyrics';
import Pics from './components/pages/Pics';

function App() {
    return ( <> 
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Lyrics" exact component={Lyrics} />
            <Route path="/Pics" exact component={Pics} />
        </Switch>
    </Router>
     </>);
}

export default App;

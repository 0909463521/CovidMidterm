import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from './logo.svg';
import './App.css';

import CovidDashboard from "./components/maps/CovidDashboard";
import StaticDashboard from "./components/statistics/StaticDashboard"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        
        <Router>
        <div>
          <nav>
          <Container>
            <Row>
            
            <Col xs={4}  >
                <Link style={{ margin:5 , backgroundColor: "white", colors: "black", border: "10px solid #4CAF50" }}  to="/">Home</Link> 
            </Col>
            <Col xs={4} >
                <Link style={{ margin:5 , backgroundColor: "white", colors: "black", border: "10px solid #4CAF50" }}  to="/map">map</Link>
            </Col>
            <Col xs={4}  >
                <Link style={{ margin:5 , backgroundColor: "white", colors: "black", border: "10px solid #4CAF50" }} to="/stats">stats</Link>
            </Col>
            
            </Row>
          </Container>
           
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/map">
              <CovidDashboard></CovidDashboard>
            </Route>
            <Route path="/stats">
              <StaticDashboard></StaticDashboard>
            </Route>
            
          </Switch>
        </div>
      </Router>
        
    );
}

export default App;

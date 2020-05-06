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
          
          <Container>
          
            <Row>
            
            <Col  xs={6} style={{ marginTop:30,marginBottom:30   }}   >
                <Link style={{ margin:5 , backgroundColor: "pink", colors: "black", border: "2px solid #F2866F",fontSize:50, marginLeft:"40%" }} to="/map">MAP</Link>
            </Col>
            <Col  xs={6} style={{ marginTop:30,marginBottom:30   }}   >
                <Link style={{ margin:5 , backgroundColor: "pink", colors: "black", border: "2px solid #F2866F",fontSize:50,marginLeft:"40%"  }} to="/stats">STATS</Link>
            </Col>
            
            </Row>
          
            <Row>
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
            </Row>
            
          </Container>

         
        </div>
      </Router>
        
    );
}

export default App;

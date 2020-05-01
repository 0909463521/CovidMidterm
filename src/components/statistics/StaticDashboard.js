import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Container from "react-bootstrap/Container";

import 'bootstrap/dist/css/bootstrap.min.css';
import VietNam from './staticVN'
import World from './staticWorld'



const StaticDashboard = (props) => {




    return ( <Container>
        <Row>
           
            <Col xs={6}  >
                <h3 style={{marginLeft:"40%",fontSize:40}}>Việt Nam</h3>
                <VietNam></VietNam>
            </Col>
            <Col xs={6} >
                <h3 style={{marginLeft:"40%",fontSize:40}}>Thế Giới</h3>
                <World></World>
            </Col>
            
        </Row>
      
    
    </Container> )
};

export default StaticDashboard;
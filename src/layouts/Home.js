import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from '../Component/Sidebar/Sidebar'
import Header from '../Component/Header/Header';
import Profile from './Pages/Profile';

const Home= ()=>{
 
    return(
        <div className="main-content2">
            <Header/>
            <Row>
                <Col span={4}>
                    <Sidebar/>              
                </Col>
                <Col span={20} className="mt-3" >
                    <Profile/>
                </Col>
             </Row>
         
            
            
        </div>    
    ) 
} 
export default Home
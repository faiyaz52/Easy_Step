import React from 'react'
import { Row, Col } from 'antd';
import Education from './Education'
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
class EducationTab extends React.Component{

   state={
        education:[
            {
              "id": 1,
              "institude": "BIT Ranchi",  
              "from_duration":"2012-05-03",  
              "end_duration":"2016-04-03" ,  
              "grade":"95",
              "Dagree":"B-Tech",
              "location":"Ranchi"                           
            },
            {
              "id": 2,
              "institude": "IIT Kharakpur", 
              "from_duration":"2009-04-03",  
              "end_duration":"2013-05-03" ,  
              "grade":"85",
              "Dagree":"B-Tech",
              "location":"Kharakpur"   
            },
            {
              "id": 3,
              "institude": "IIM Bangalore" , 
              "from_duration":"2006-04-03",  
              "end_duration":"2008-05-03" ,  
              "grade":"90",
              "Dagree":"MBA",
              "location":"Bangalore"   
            },
            {
              "id": 4,
              "institude": "IIT Bangalore" , 
              "from_duration":"2010-04-03",  
              "end_duration":"2014-05-03" ,  
              "grade":"90",
              "Dagree":"B-Tech",
              "location":"Bangalore"                        
            },
            {
              "id": 5,
              "institude": "IIT Mumbai" , 
              "from_duration":"2011-04-03",  
              "end_duration":"2015-05-03" ,  
              "grade":"90",
              "Dagree":"MCA",
              "location":"Mumbai"  
            },
            {
              "id": 6,
              "institude": "IIT Bangalore" , 
              "from_duration":"2010-04-03",  
              "end_duration":"2014-05-03" ,  
              "grade":"90",
              "Dagree":"B-Tech",
              "location":"Bangalore" 
            },
            
          ]
    }

    render(){

        return(
            <>
                <Row>
                    <Col span={24}>
                        <Row>
                            { this.state.education.map((edu)=>{
                                return(                              
                                <Col span={6}>
                                    <Education edu={edu}/>
                                </Col>
                                )
                            })}
                            <Col className="ml-1">
                                <AddNewCard title="Add Education"/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </>
        )
    }
}

export default EducationTab
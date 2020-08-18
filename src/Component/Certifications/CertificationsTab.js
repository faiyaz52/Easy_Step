import React,{Component} from 'react'
import { Row, Col } from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import Certifications from './Certifications';


class CertificationsTab extends Component {
    constructor(props){
        super(props)
        this.state={
            Certification:[
                {
                  "id": 1,
                  "title": "Gutter Cleaner", 
                  "exp":"Expires soon", 
                  "from_duration":"2019-05-03",  
                  "end_duration":"2020-09-03" ,  
                  "issued":"Microsoft",
                  "skills":"React",                           
                },
                {
                  "id": 2,
                  "title": "Developer",
                  "exp":"On going",   
                  "from_duration":"2019-03-03",  
                  "end_duration":"2020-02-03" ,  
                  "issued":"Oracle",
                  "skills":"React" ,  
                },
                {
                  "id": 3,
                  "title": "Tester",
                  "exp":"Completed",    
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "issued":"TCS",
                  "skills":"Part Time" ,  
                },
                {
                  "id": 4,
                  "title": "React Developer",
                  "exp":"On going",    
                  "from_duration":"2019-01-03",  
                  "end_duration":"2020-09-03" ,  
                  "issued":"Selfsevit solution",
                  "skills":"Developement",                           
                },
                {
                  "id": 5,
                  "title": "Storage Admin",
                  "exp":"Expired soon",    
                  "from_duration":"2019-03-03",  
                  "end_duration":"2020-02-03" ,  
                  "issued":"Amazon",
                  "skills":"Full Time" ,  
                },
                {
                  "id": 6,
                  "title": "Cloud Admin", 
                  "exp":"Completed",   
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "issued":"TCS",
                  "skills":"Part Time" ,  
                },
                
              ]
        }
    }
  
    render(){
  
        return (
            <>
     
                <Row>
                    <Col span={24}>
                        <Row>                      
                        <>
                            {this.state.Certification.map((cert, index) => {
                                return (
                                    
                                <Col span={6}  key={index}  className="mb-2">
                                    <Certifications cert={cert} />
                                </Col>
                                )
                            })}
                        </>
								
                            <Col md={6} span={6} className="mb-2 ml-1">
                                <AddNewCard title="Add work Certification"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                               
            </>
        )
    }
   
}
 export default CertificationsTab






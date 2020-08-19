import React,{Component} from 'react'
import { Row, Col } from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import WorkExpereince from './WorkExpereince';


class WorkExpereinceTab extends Component {
    constructor(props){
        super(props)
        this.state={
            workExp:[
                {
                  "id": 1,
                  "title": "Java Developer",  
                  "from_duration":"2019-05-03",  
                  "end_duration":"2020-09-03" ,  
                  "company":"Microsoft",
                  "emp_type":"Full Time" ,  
                  "location":"Bangalore",
                  "responbilies":"Development",                           
                },
                {
                  "id": 2,
                  "title": "Developer",  
                  "from_duration":"2019-03-03",  
                  "end_duration":"2020-02-03" ,  
                  "company":"Oracle",
                  "emp_type":"Full Time" ,  
                  "location":"Hyderabad",
                  "responbilies":"Developement",
                },
                {
                  "id": 3,
                  "title": "Tester",  
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "company":"TCS",
                  "emp_type":"Part Time" ,  
                  "location":"Mumbai",
                  "responbilies":"Tester",
                },
                {
                  "id": 4,
                  "title": "React Developer",  
                  "from_duration":"2019-01-03",  
                  "end_duration":"2020-09-03" ,  
                  "company":"Selfsevit solution ",
                  "emp_type":"Full Time" ,  
                  "location":"Bangalore",
                  "responbilies":"Developement",                           
                },
                {
                  "id": 5,
                  "title": "Storage Admin",  
                  "from_duration":"2019-03-03",  
                  "end_duration":"2020-02-03" ,  
                  "company":"Amazon",
                  "emp_type":"Full Time" ,  
                  "location":"Hyderabad",
                  "responbilies":"Developement",
                },
                {
                  "id": 6,
                  "title": "Cloud Admin",  
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "company":"TCS",
                  "emp_type":"Part Time" ,  
                  "location":"Mumbai",
                  "responbilies":"Tester",
                },
                {
                  "id": 7,
                  "title": "Sr.Developer",  
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "company":"Wibro",
                  "emp_type":"Full Time" ,  
                  "location":"Kolkata",
                  "responbilies":"Tester",
                },
                {
                  "id": 8,
                  "title": "Sr.Developer",  
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "company":"FaceBook",
                  "emp_type":"Full Time" ,  
                  "location":"Kolkata",
                  "responbilies":"Developement",
                },
                {
                  "id": 9,
                  "title": "Sr.Tester",  
                  "from_duration":"2020-05-03",  
                  "end_duration":"2020-07-03" ,  
                  "company":"TCS",
                  "emp_type":"Full Time" ,  
                  "location":"Kolkata",
                  "responbilies":"Tester",
                }
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
										{this.state.workExp.map((work_exp, index) => {
											return (
												
												<Col span={6}  key={index} className="mb-1">
											  	<WorkExpereince work_exp={work_exp} />
											</Col>
											)
										})}
									</>
								
                            <Col md={6} span={6} className="mb-2 ml-1">
                                <AddNewCard title="Add work Expereince"/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                               
            </>
        )
    }
   
}
 export default WorkExpereinceTab






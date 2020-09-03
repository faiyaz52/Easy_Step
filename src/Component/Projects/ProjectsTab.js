import React from 'react'
import {Row,Col} from 'antd' 
import Projects from './Projects'
import AddProjects from './AddProjects'
class ProjectsTab extends React.Component{
 state={
    Project:[
        {
            "id": 1,
            "project": "First Project",
            "status": "Completed",  
            "project_id": "#1234567",   
            "from_duration":"05-03-2012",  
            "end_duration":"2016-04-03" ,  
            "account":"Microsoft",
            "response":"Development",
            "skill":"React"                           
          },
          {
            "id": 2,
            "project": "Second Project",
            "status": "On going", 
            "project_id": "#2234567",  
            "from_duration":"2009-04-03",  
            "end_duration":"2013-05-03" ,  
            "account":"Oracle",
            "response":"Tester",
            "skill":"Angular"   
          },
          {
            "id": 3,
            "project": "3th Project",
            "status": "On going", 
            "project_id": "#3234567",  
            "from_duration":"2006-04-03",  
            "end_duration":"2008-05-03" ,  
            "account":"TCS",
            "response":"Handle multiple client",
            "skill":"Cisco Router"   
          },
          {
            "id": 4,
            "project": "Second Project",
            "status": "Completed", 
            "project_id": "#4234567",  
            "from_duration":"2010-04-03",  
            "end_duration":"2014-05-03" ,  
            "account":"Selfsevit solution",
            "response":"Deployement",
            "skill":"Java "                        
          },
          {
            "id": 5,
            "project": "First Project",
            "project_id": "#5234567",
            "status": "On going",   
            "from_duration":"2011-04-03",  
            "end_duration":"2015-05-03" ,  
            "account":"Amazon",
            "response":"Admin",
            "skill":"Phython"  
          },
          {
            "id": 6,
            "project": "4th Project",
            "project_id": "#6234567",
            "status": "Completed",    
            "from_duration":"2010-04-03",  
            "end_duration":"2014-05-03" ,  
            "account":"TCS",
            "response":"Development",
            "skill":"React native" 
          },
    ]
 }
    render() {

        return(
            <>
                <Row>
                    <Col span={24}>
                        <Row>
                            {
                                this.state.Project.map((Proj)=>(
                                    <Col span={6} className="mb-1">
                                        <Projects Proj={Proj}/>
                                </Col>
                                )
                                )
                            }
                            <Col span={6}>
                                <AddProjects/>
                            </Col>
                        </Row>                  
                    </Col>
                </Row>

            </>
        )
    }
}

export default ProjectsTab
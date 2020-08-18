import React from 'react'
import { Tabs } from 'antd';
import './ProfileTab.css'
import WorkExpereinceTab from '../WorkExpereince/WorkExpereinceTab';
import CertificationsTab from '../Certifications/CertificationsTab';
import EducationTab from '../Education/EducationTab';
import ProjectsTab from '../Projects/ProjectsTab';
const ProfileTab = () =>{
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }
    return (
        <>
        <div className="card-container mt-4">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Skills" key="1">
                My
              </TabPane>
              <TabPane tab="Certifications" key="3">
                <CertificationsTab/>
              </TabPane>
              <TabPane tab="Projects" key="4">         
                <ProjectsTab/>
              </TabPane>
              <TabPane tab="Work Experience" key="5">
                <WorkExpereinceTab/>
              </TabPane>
              <TabPane tab="Education" key="6">
                <EducationTab/>    
              </TabPane>
            </Tabs>
        </div>
        </>   
 )

}
export default  ProfileTab
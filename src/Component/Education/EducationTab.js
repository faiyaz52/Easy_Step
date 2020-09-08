import React from 'react'
import { Row, Col } from 'antd';
import Education from './Education'
import AddEducation from './AddEducation';
import {useSelector } from 'react-redux'

const EducationTab = ()=>{
  const education = useSelector((state) => state.education.Edu)
        return (
          <>
            <Row>
                <Col span={24}>
                    <Row>
                        { education.map((edu)=>{
                            return(                              
                            <Col span={6} className="mb-1">
                                <Education edu={edu}/>
                            </Col>
                            )
                        })}
                        <Col className="ml-1">
                            
                            <AddEducation/>
                        </Col>
                    </Row>

                </Col>
            </Row>
          </>
        )
    
}

export default EducationTab
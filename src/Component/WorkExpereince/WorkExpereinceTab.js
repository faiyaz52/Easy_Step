import React,{Component} from 'react'
import { Row, Col } from 'antd';
import WorkExpereince from './WorkExpereince';
import AddWorkExpereince from './AddWorkExpereince';
import { useSelector } from 'react-redux'

const WorkExpereinceTab = () => {

  const WorkExp =useSelector((state)=>state.workExp.workExp)
  console.log(WorkExp)
        return (
            <>
     
                <Row>
                    <Col span={24}>
                        <Row>                      
                  <>
										{WorkExp.map((work_exp, index) => {
											return (
												
												<Col span={6}  key={index} className="mb-1">
											  	<WorkExpereince work_exp={work_exp} />
											</Col>
											)
										})}
									</>
								
                            <Col md={6} span={6} className="mb-2 ml-1">
                             
                                <AddWorkExpereince />
                            </Col>
                        </Row>
                    </Col>

                </Row>
                               
            </>
        )
 }
 export default WorkExpereinceTab

import React from 'react'
import { Card,Col,Row } from 'antd';
import './WorkExpereince.css'
import Moment from 'react-moment';
class WorkExpereince extends React.Component{

 render(){

    let {work_exp} = this.props;

    return(
        <>           
            <Card bordered={true} style={{ width: 266 }} className=" profile_card shadow-lg border-btm p-2 m-2">
                <Col md={24} className="">
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={21} >
                                <div className="text-primary cert_text_sm">
                                    <div >
                                        <span>{work_exp.title}</span>
                                        
                                    </div>
                                </div>
                            </Col>
                            <Col span={3} className="mb-2">
                                <button className="hvr_icon m-0 text-muted btn bg-transparent p-2">
                                    <ion-icon name="pencil-outline"></ion-icon>
                                </button>
                            </Col>
                        </Row>
                    </div>
                   
                    <div className="border-btm mb-1">
                        <div>
                            <span className="text-primary cert_text_xs">Duration</span>
                        </div>
                        <div className="mb-1">
                            <Moment format="DD MMM YYYY">
                                {work_exp.from_duration} 
                            </Moment> - <Moment format="DD MMM YYYY">
                                {work_exp.end_duration}
                            </Moment>
                            
                            
                        </div>
                    </div>
                    <div className="border-btm mb-2" >
                        <div className="text-primary cert_text_xs">
                            Organisation
                        </div>
                        <div>
                            <div className="mb-1">
                            <span>{work_exp.company}</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={12} >
                                    <div>
                                        <div className="text-primary cert_text_xs">
                                            <span>Employment Type</span>
                                        </div>
                                        <div className="cert_text_xs">
                                        <span>{work_exp.emp_type}</span>
                                        </div>
                                    </div>
                            </Col>
                            <Col span={12} >
                                    <div >
                                        <div className="text-primary cert_text_xs">
                                            <span> Location</span> 
                                                                                  
                                        </div>
                                        <div className="cert_text_xs">
                                        <span>{work_exp.location}</span>  
                                            
                                        </div>
                                    </div>
                            </Col>
                                
                        </Row>
                    </div>
                    <div className=" mb-1">
                        <div className="text-primary cert_text_xs">
                            Responsibilities
                        </div>
                        <div>
                            <div>
                              <span>{work_exp.responbilies}</span>  
                            </div>
                        </div>
                    </div>
                </Col>  
            </Card>
        </>
    )
 }
}

export default WorkExpereince
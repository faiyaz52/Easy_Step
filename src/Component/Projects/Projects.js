import React from 'react'
import { Card,Col,Row,Tag } from 'antd';
import Moment from 'react-moment';
const Projects = ({Proj}) =>{

let {project,project_id,from_duration,end_duration,account,response,skill,status}=Proj

    return(
        <>
            <Card bordered={true} style={{ width: 266 }} className=" profile_card shadow-lg border-btm p-0 m-1">
                <Col md={24} className="">
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={13} >
                                <div className="text-primary cert_text_sm">
                                    <div >
                                        <span>{project}</span>
                                    </div>
                                </div>
                            </Col>
                            <Col span={9}>
                                <div className="text-primary cert_text_sm">
                                    <div >                                  
                                        <span> <Tag color="success">{status}</Tag></span>
                                    </div>
                                </div>
                            </Col>
                            <Col span={2} className="mb-2">
                                <button className="hvr_icon m-0 text-muted btn bg-transparent p-2">
                                    <ion-icon name="pencil-outline"></ion-icon>
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={24} >
                                    <div>
                                        <div className="cert_text_xs mb-2">
                                            <span className="text-primary">Project Id</span> <span>{project_id}</span>
                                        </div>
                                    </div>
                            </Col>                              
                        </Row>
                    </div>
                    <div className="border-btm mb-1">
                        <div>
                            <span className="text-primary cert_text_xs">Project Duration</span>
                        </div>
                        <div className="mb-1">
                        <Moment format="DD MMM YYYY"> 
                                            {from_duration}
                                        </Moment> to   <Moment format="DD MMM YYYY"> 
                                        {end_duration}
                                        </Moment>
                        </div>
                    </div>
                    <div className="border-btm mb-1">
                        <div>
                            <span className="text-primary cert_text_xs">Account</span>
                        </div>
                        <div className="mb-1">
                            <span>{account}</span>
                        </div>
                    </div>
                    <div className="border-btm mb-1" >
                        <div className="text-primary cert_text_xs">
                                Responsibilities
                        </div>
                        <div>
                            <div className="mb-1">
                                <span>{response }</span>
                            </div>
                        </div>
                    </div>
                    <div className=" mb-1">
                        <div className="text-primary cert_text_xs">
                            Skill Used
                        </div>
                        <div>
                            <div>
                            <Tag> <span>{skill} </span></Tag>  
                            </div>
                        </div>
                    </div>
                </Col>  
            </Card>
        </>
    )
}

export default Projects
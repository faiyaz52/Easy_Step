import React from 'react'
import { Card,Col,Row } from 'antd';
import Moment from 'react-moment'

const Education = ({edu}) =>{
    let {institude,from_duration,end_duration,grade,Dagree,location}=edu
    return(
        <>
            <Card bordered={true} style={{ width: 270 }} className=" profile_card shadow-sm border-btm p-1 m-1">
                <Col md={24} className="">
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={21} >
                                <div>
                                    <div className="text-primary text-lg">
                                        <span>{institude} </span>
                                    </div>
                                </div>
                            </Col>
                            <Col span={3} className="mb-1">
                            <button className={"hvr_icon m-0 text-muted btn bg-transparent mr-4 p-2"}>
                                <ion-icon name="pencil-outline"></ion-icon>
                            </button>
                            </Col>
                        </Row>
                    </div>
                    <div className="border-btm mb-1">
                        <div>
                            <span className="text-primary cert_text_xs">Dagree / Course</span>
                        </div>
                        <div className=" mb-1">
                            <span>{Dagree}</span>
                        </div>
                    </div>
                    <div className="border-btm mb-1">
                        <div>
                            <span className="text-primary cert_text_xs">Grade</span>
                        </div>
                        <div className="mb-1">
                            <span>{grade}%</span>
                        </div>
                    </div>
                    <div className="border-btm mb-2" >
                        <div className="text-primary cert_text_xs">
                        Duration
                        </div>
                        <div>
                            <div className="mb-1">
                             <Moment format="DD MMM YYYY">
                                {from_duration}
                            </Moment> - <Moment format="DD MMM YYYY">
                                {end_duration}
                            </Moment> 
                            </div>
                        </div>
                    </div>
                    <div className=" mb-1">
                        <div className="text-primary cert_text_xs">
                            Location
                        </div>
                        <div>
                            <div>
                                <span>{location} </span> 
                            </div>
                        </div>
                    </div>
                </Col>  
            </Card>
        </>
    )
}

export default Education
import React from 'react'
import { Card,Col,Row,Tag } from 'antd';
import './Certifications.css'
import Moment from 'react-moment';
import AddCard from '../Utilities/AddCard/AddCard';

class Certifications extends React.Component{

     render(){
        let {cert} = this.props;
        
        console.log("faitaz how are you " + cert.title)

    return(
        <>
       
            <Card bordered={true} style={{ width: 266 }} className=" profile_card shadow-lg border-btm p-0 m-1">
                <Col md={24} className="">
                    <div className="border-btm mb-1"> 
                        <Row>
                            <Col span={12} >
                                    <div>
                                        <div className="text-primary cert_text_sm">
                                            <span>{cert.title}</span>
                                        </div>
                                    </div>
                            </Col>
                            <Col span={10} >
                                    <div>
                                        <div className="text-primary cert_text_sm">
                                        
                                            <span> <Tag color="success"><span>{cert.exp}</span></Tag></span>
                                        </div>
                                    </div>
                            </Col>
                            <Col span={2} className="mb-2">
                            <button className={"hvr_icon m-0 text-muted btn bg-transparent  p-2"}>
                                <ion-icon name="pencil-outline"><AddCard/></ion-icon>
                            </button>
                            </Col>
                        </Row>
                    </div>
                    <div className="border-btm mb-1">
                        <Row>
                            <Col span={12} >
                                <div>
                                    <div className="text-primary mb-1 cert_text_xs">
                                        <span>Valid from</span>
                                    </div>
                                    <div  className="mb-1">
                                        <Moment format="DD MMM YYYY">
                                            {cert.from_duration}
                                        </Moment>
                                    </div>
                                </div>
                            </Col>
                            <Col span={12} >
                                <div>
                                    <div className="text-primary mb-1 cert_text_xs">
                                        <span>Valid till</span>
                                    </div>
                                    <div  className="mb-1">
                                        <Moment format="DD MMM YYYY">
                                            {cert.end_duration}
                                        </Moment>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </div>
                    <div className="border-btm mb-1">
                        <div  className="mb-2">
                            <span className="text-primary cert_text_xs">Issued by </span>  <span className="ml-2"><span>{cert.issued}</span></span>
                        </div>                  
                    </div>
                    <div className=" mb-1">
                        <div className="text-primary cert_text_xs">
                            Skills Learned 
                        </div>
                        <div className="mt-2">
                            
                            <Tag> <span>{cert.skills} </span></Tag>  
                            <Tag>Javascript </Tag>                       
                           
                        </div>
                    </div>
                </Col>  
            </Card>
        </>
    )
}
}

export default Certifications
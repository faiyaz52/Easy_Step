import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd';
import Certifications from './Certifications';
import AddCertificate from './AddCertificate';


const CertificationsTab =() => {
   
  const Certification =useSelector((state)=>state.certi)
  console.log(Certification)
        return (
            <>
     
                <Row>
                    <Col span={24}>
                        <Row>                      
                        <>
                            {Certification.map((cert, index) => {
                                return (
                                    
                                <Col span={6}  key={index}  className="mb-1">
                                    <Certifications cert={cert} />
                                </Col>
                                )
                            })}
                        </>
								
                            <Col md={6} span={6} className="mb-2 ml-1">
                               <AddCertificate/>
                            </Col>
                        </Row>
                    </Col>

                </Row>
                               
            </>
        )
    }
   

 export default CertificationsTab






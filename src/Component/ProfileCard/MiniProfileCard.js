import React, { Profiler } from 'react'
import './MiniProfileCard.css'
import { Card,Avatar, Row} from 'antd';
import Flip from 'react-reveal/Flip';
import ResumeUpload from '../Utilities/ResumeUpload/ResumeUpload';
const MiniProfileCard = () => {
    return(
        <Flip left>
            <Card bordered={false} style={{ width: 700 }} className="shadow-lg profile_card">
                <div className="d-flex justify-content-between">
                    <Row>
                        <div>
                            <div>
                                <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="mr-5"/>
                                <div className="mini_link mr-5" >
                                    Upload new photo
                                </div>
                            </div>
                            <div>
                                <div className=" mb-0 mr-5  text-primary">
                                <span className="subtitle_icon ">
                                <ion-icon name="person-outline"></ion-icon>
                                    </span>
                                    <span className="text">
                                    Faiyaz Alam{Profiler.name}
                                    </span>
                                </div>
                                <div>
                                    <span className="subtitle_icon">
                                        <ion-icon name="briefcase-outline"></ion-icon>
                                    </span>
                                    <span className="subtitle mr-5">
                                        Developer {Profiler.role}
                                    </span>
                                </div>
                                <div>
                                    <span className="subtitle_icon">
                                        <ion-icon name="location-outline"></ion-icon>
                                    </span>
                                    <span className="subtitle">
                                        San Jose, Bangalore{Profiler.location}
                                    </span>
                                </div>
                            </div>   
                        </div>   
                    </Row>
                    <div className="d-flex flex-column justify-content-between">
                        <div className="profile_social_icons">
                            <a className="icon_item">
                                <ion-icon name="logo-linkedin" className="icons"></ion-icon>
                            </a>
                            <a className="icon_item">
                                <ion-icon name="logo-twitter" className="icons"></ion-icon>
                            </a>
                            <a className="icon_item">
                                <ion-icon name="logo-github" className="icons"></ion-icon>
                            </a>
                            <a className="icon_item">
                                <ion-icon name="logo-stackoverflow" className="icons"></ion-icon>
                            </a>
                        </div>
                        <ResumeUpload/>
                    </div>       
                </div>
            </Card>
        </Flip>
    )

}
export default MiniProfileCard
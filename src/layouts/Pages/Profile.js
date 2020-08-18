import React from 'react'
import { Row, Col } from 'antd';
import MiniProfileCard from '../../Component/ProfileCard/MiniProfileCard';
import SkillCard from '../../Component/SkillCard/SkillCard';
import SkillContent from '../../Component/SkillCard/SkillContent';
import ProfileTab from '../../Component/ProfileTab/ProfileTab';
const Profile = () => {
  return(
    <Row>
        <Col span={15} >
			      <MiniProfileCard/>				 
        </Col>
        <Col span={9}>
            <SkillCard/>
        </Col>
        <Col span={24}>
            <SkillContent/>
        </Col>
        <Col span={24}>
            <ProfileTab/>
        </Col>
    </Row>
  )
}
export default Profile;
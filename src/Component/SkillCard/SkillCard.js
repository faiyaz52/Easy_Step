import React from 'react'
import { Progress,Card } from 'antd';
import './SkillCard.css'
import Flip from 'react-reveal/Flip';
const SkillCard =() =>{
    return (
        <>
            <Flip left>
                <Card style={{ width: 360 }} className="shadow-lg skill_card ml-4">
                    <div className="mb-2">
                        <span >Add skills and get 2x better job recommendations</span>
                    </div>
                            <Progress percent={60} status="active" />
                    <div className="mt-3 skill_card_link">
                        <span>Add Skill</span>
                    </div>
                </Card>
            </Flip>
        </>
    )
}
export default SkillCard
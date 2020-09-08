import React,{useState} from 'react'
import { DatePicker,message,Form,Button, Input,Select, Row, Col,} from 'antd';
import {useDispatch} from 'react-redux'

import UseButton from '../Utilities/Button/UseButton';
import { useHistory } from 'react-router-dom';
import shortid  from 'shortid'
import { addEducation } from '../../Redux/actions/education';

const AddEduDetails = (props)=>{
    let history = useHistory();
    const Dispatch = useDispatch()
    const [institude, setinstitude] = useState ("");
    const [from_duration, setfrom_duration] = useState ("");
    const [end_duration, setend_duration] =useState ("");
    const [grade, setgrade] = useState(""); 
    const [location, setlocation] = useState("");
    const [Dagree, setDagree] = useState("");

    const AddEdu =(e)=>{
    e.preventDefault()
    console.log(institude,grade,Dagree)
    const new_AddEducation= {
        id: shortid.generate(),
        institude:institude,
        from_duration:from_duration,
        end_duration:end_duration,
        grade:grade,
        location:location,
        Dagree:Dagree,
    }
    Dispatch(addEducation(new_AddEducation))
   history.push("/")
 }
 const handleOk = () => {
   
};
    const { Option ,select} = Select;
    return(
        <>
            <form onSubmit={AddEdu}>  
            <Row>
            <Col span={12}>
                <div >      
                <Form.Item >
                <span>Institute Name </span>
                <Input 
                 value={institude}
                 onChange={(e) => setinstitude(e.target.value)} 
                className="button"/>
                </Form.Item>
                
                </div>
                </Col>
                <Col span={12}>
                <div>      
                <Form.Item >
                <span className="ml-1">
                Course</span> 
                <Input 
                 value={Dagree}
                 onChange={(e) => setDagree(e.target.value)}  
                className="button"/>
                
                </Form.Item>
            
                </div>
                </Col>
                <Col span={12}>
                <div >      
                <Form.Item >
                <span> Location </span> 
                <Input
                    value={location}
                    onChange={(e) => setlocation(e.target.value)} 
                    className="button"
                />
                </Form.Item>
                
                </div>
                </Col>
                <Col span={12}>
                <div >      
                <Form.Item >
                <span className="ml-1">Grade</span> 
                <Input
                  value={grade}
                  onChange={(e) => setgrade(e.target.value)} 
                  className="button"
                />
                </Form.Item>
                </div>
                </Col>
            </Row>
            
            <Row>
                <Col span={12}>
                <Form.Item >
                    <span className="ml-1 mt-1">Term Start Date</span> <DatePicker className="button"/>
                </Form.Item>
        
                </Col>
                <Col span={12}>
                <Form.Item >
                    <span className="ml-1 mt-1">Term End Date </span> <DatePicker className="button"/>
                </Form.Item>
        
                </Col>
                <UseButton/>
            </Row>  
            </form>  
        </> 
   )
}

export default AddEduDetails
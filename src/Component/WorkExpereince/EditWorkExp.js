import React,{useState} from 'react'
import { DatePicker,message,Form,Button, Input,Select, Row, Col,} from 'antd';
import {useDispatch} from 'react-redux'
import {addWorkExpereince} from '../../Redux/storeConfig/store';
import UseButton from '../Utilities/Button/UseButton';
// import { useHistory } from 'react-router-dom';
const EditWorkExp = (props)=>{

    const Dispatch = useDispatch()
    const [title, settitle] = useState ("");
    const [role, setrole] = useState ("");
    const [empType, setempType] =useState ("");
    const [company, setCompany] = useState(""); 
    const [location, setlocation] = useState("");
    const [emp_type, setemp_type] = useState("");
    const [responbilies, setresponbilies] = useState("");
    const [loading, setloading] = useState(false); 
 const EditExp =(e)=>{
    e.preventDefault()
    const new_Add_WorkExp= {
        role:role,
        title:title,
        emp_type:emp_type,
        company:company,
        location:location,
        emp_type:emp_type,
        responbilies:responbilies
    }
    Dispatch(addWorkExpereince(new_Add_WorkExp))
    // history.push("/")
 }
 
    const { Option ,select} = Select;
    return(
        <>
            <form onSubmit={EditExp}>  
                <Row>
                    <Row>
                        <Col span={12}>
                            <div>            
                                <Form.Item >
                                    <span>
                                        Role
                                    </span> 
                                    <Input 
                                        value={role}
                                        onChange={(e) => setrole(e.target.value)}
                                        className="button"
                                    />
                                </Form.Item>                
                            </div>
                        </Col>
                        <Col span={12}>
                           <select  value={emp_type}
                                    onChange={(e) => setemp_type(e.target.value)} >
                               <option value="Full Time">Full Time</option>
                               <option value="Part Time">Part Time</option>
                               <option value="Intership">Intership </option>
                           </select>
                        </Col> 
                   </Row>
                   <Row>
                    <Col span={12}>
                        <div>      
                            <Form.Item >
                                <span>Company </span>
                            <Input
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}  
                                className="button"
                            />
                            </Form.Item>              
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>      
                            <Form.Item >
                                <span className="ml-1">Location</span>
                                <Input
                                    value={location}
                                    onChange={(e) => setlocation(e.target.value)}  
                                className="button"
                                />
                            </Form.Item>
                        </div>
                    </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item >
                                <span className="ml-1 mt-1">Employment Start Date</span>
                                <DatePicker className="button"/>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item >
                                <span className="ml-1 mt-1">Employment End Date </span>
                                <DatePicker className="button"/>
                            </Form.Item>
                        </Col>
                    </Row>   
                    <Row>
                        <Col span={24}>
                            <Form.Item >
                                <span className="ml-1 mt-1">Your Responsibilites </span>
                                <Input.TextArea 
                                    value={responbilies}
                                    onChange={(e) => setresponbilies(e.target.value)}  
                                    className="textbox mt-2"
                                />
                            </Form.Item>
                        </Col> 
                        <Form.Item >
                           <UseButton/>
                        </Form.Item>
                        {/* <button>
                            Save
                        </button>                       */}
                    </Row> 
                </Row> 
            </form>  
        </> 
   )
}

export default EditWorkExp
import React from 'react'

import { Modal,message, Button,Card, DatePicker, Input,Form , Row, Col,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import Skill from '../Skill/Skill';
import AddSkilProjects from './AddSkilProjects';

class AddProjects extends React.Component {
  state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
        visible: false,
        });
        
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        message.success(' successfully submitted ');
        }, 2000);
    };
    

  render() {
    const { RangePicker } = DatePicker;

    return (
      <>
 
          <AddNewCard openModal={this.showModal} title="Add Project"/>
            <Modal
            width={760} 
                title="Add Project"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel} >
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                        Save
                    </Button>,
                ]}                      
                >
                <Card  bordered={false} >
                      <Row>
                        <Col span={12}>
                             
                          <Form.Item >
                          About your Project <Input placeholder="Enter Role" className="button"/>
                          </Form.Item>
                            
                         
                          </Col>
                          <Col span={12}>
                            
                          <Form.Item >
                          Project Status <Input  className="button"/>
                          </Form.Item>
                      
                         
                          </Col>
                          <Col span={12}>
                             
                          <Form.Item >
                          Project Id <Input  className="button"/>
                          </Form.Item>
                            
                         
                          </Col>
                          <Col span={12}>
                             
                            <Form.Item >
                            <span className="ml-1">Acount</span> <Input  className="button"/>
                          </Form.Item>
                         
                          </Col>
                        </Row>
                        
                        <Row className="mb-2">
                          <Col span={24}>
                            <span className="mb-5">Skills Learned</span>
                              <div style={{marginTop:"10px",backgroundColor:"#f0f5f4",height:"100px",padding:"10px"}}>
                                <AddSkilProjects/>
                              </div>
                          </Col>
                        </Row>  
                        <Row>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Project Duration from</span> <DatePicker className="button"/>
                        </Form.Item>
                    
                          </Col>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Project Duration to </span> <DatePicker className="button"/>
                        </Form.Item>
                    
                          </Col>
                        </Row>   
                        <Row>
                          <Col span={24}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Your Responsibilites </span> <Input.TextArea className="textbox mt-2"/>
                          </Form.Item>
                          </Col>
                        </Row>    
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddProjects

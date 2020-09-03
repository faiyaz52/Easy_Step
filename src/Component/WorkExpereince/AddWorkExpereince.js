import React from 'react'

import { Modal,message, Button,Card, DatePicker,   Form, Input,Select , Row, Col,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';

class AddWorkExpereince extends React.Component {
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
    const { Option } = Select;
    return (
      <>
 
          <AddNewCard openModal={this.showModal} title="Add work Expereince"/>
            <Modal
             width={760} 
             className="shadow-lg"
                title="Add Work Expereince"
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
                          <div >      
                          <Form.Item >
                          Role <Input placeholder="Enter Role" className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div>      
                            <Form.Item >
                            <span className="ml-1">
                                Type of Employment</span>
                            <Select style={{height:"40px",borderRadius:"10px",marginTop:"10px"}}>
                              <Option value="fulltime" >Full Time</Option>
                              <Option value="parttime">Part Time</Option>
                              <Option value="intership">Intership</Option>
                            </Select>
                          </Form.Item>
                      
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                          <Form.Item >
                          Company <Input  className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Location</span> <Input  className="button"/>
                          </Form.Item>
                          </div>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Employment Start Date</span> <DatePicker className="button"/>
                        </Form.Item>
                    
                          </Col>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Employment End Date </span> <DatePicker className="button"/>
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

export default AddWorkExpereince

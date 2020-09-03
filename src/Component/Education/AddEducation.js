import React from 'react'

import { Modal,message, Button,Card, DatePicker, Input,Form , Row, Col,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import './Education.css'
class AddEducation extends React.Component {
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
        <AddNewCard openModal={this.showModal} title="Add new Education"/>
            <Modal
             width={760} 
                title="Add Education"
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
                          Institute Name <Input  className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div>      
                            <Form.Item >
                            <span className="ml-1">
                            Course</span>  <Input  className="button"/>
                           
                          </Form.Item>
                      
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                          <Form.Item >
                          Location <Input  className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Grade</span> <Input  className="button"/>
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
                        </Row>   
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddEducation

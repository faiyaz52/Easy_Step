import React from 'react'
import { Modal,message, Button,Card, DatePicker,  Form, Input , Row, Col,} from 'antd';
import Certifications from '../../Certifications/Certifications';



class AddCard extends React.Component {
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
       
            <Modal
                width={760}   
                title="Add New Certificate"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                        Save
                    </Button>,
                ]}  
                              
                >
                <Card  bordered={false} >
                      <div>
                      <Row>
                          <Col span={12}>
                          <div class="floating-label">      
                          <Form.Item >
                          Credential ID <Input placeholder="Enter Credential ID" className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Certificate URL</span> <Input placeholder="Enter Certificate URL" className="button"/>
                          </Form.Item>
                          </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                          <div class="floating-label">      
                          <Form.Item >
                          Certificate Name <Input placeholder="Enter Certificate Name" className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Issued by</span> <Input placeholder="Enter Issued by" className="button"/>
                          </Form.Item>
                          </div>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Valid from</span> <DatePicker className="button"/>
                        </Form.Item>
                    
                          </Col>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Valid till </span> <DatePicker className="button"/>
                        </Form.Item>
                    
                          </Col>
                        </Row>
                                    
                     
                    </div>
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddCard

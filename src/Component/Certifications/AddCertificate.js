import React,{PureComponent} from 'react'
import { Modal,message, Button,Card, DatePicker,  Form, Input , Row, Col,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import AddSkilProjects from '../Projects/AddSkilProjects';
import FileUpload from '../../FileUpload/FileUpload';

class AddCertificate extends PureComponent {
  

  constructor(props) {
    super(props);
    this.state = {
       visible: false ,
      cert:"",
      cert_url:"",
      cert_name:"",
      cert_issue:"",
      cert_from:"",
      cert_to:"",

    
    };
  }

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
    
    handleChange = (event) => {
      this.setState({cert_id: event.target.value});
      this.setState({cert_url: event.target.value});
      this.setState({cert_name: event.target.value});
      this.setState({cert_issue: event.target.value});
      this.setState({cert_from: event.target.value});
      this.setState({cert_to: event.target.value});
     
      
    }

    mySubmitHandler = (event) => {
      event.preventDefault();
    console.log(this.state.cert)
    }
  render() {
    const { RangePicker } = DatePicker;

    return (
      <>
        <AddNewCard openModal={this.showModal} title="Add New a Certificate"/>
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
                        <form onSubmit={this.mySubmitHandler}>
                      <Row>
                          <Col span={12}>
                          <div>      
                          <Form.Item >
                          Credential ID <Input  value={this.state.cert}  onChange={this.handleChange} className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Certificate URL</span> <Input  value={this.state.cert_url}  onChange={this.handleChange} className="button"/>
                          </Form.Item>
                          </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={12}>
                          <div class="floating-label">      
                          <Form.Item >
                          Certificate Name <Input  value={this.state.cert_name}  onChange={this.handleChange} className="button"/>
                          </Form.Item>
                            
                          </div>
                          </Col>
                          <Col span={12}>
                          <div >      
                            <Form.Item >
                            <span className="ml-1">Issued by</span> <Input  value={this.state.cert_issue}  onChange={this.handleChange} className="button"/>
                          </Form.Item>
                          </div>
                          </Col>
                        </Row>
                        
                        <Row>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Valid from</span> <DatePicker  value={this.state.cert_from}  onChange={this.handleChange} className="button"/>
                        </Form.Item>
                    
                          </Col>
                          <Col span={12}>
                          <Form.Item >
                          <span className="ml-1 mt-1">Valid till </span> <DatePicker  value={this.state.cert_to}  onChange={this.handleChange} className="button"/>
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
                      <div>

                        <FileUpload title="Upload certificate Image or PDF" filetitle="Drop your file here" />
                      </div>
                      <button>
            A
          </button>
                      </form>
                    </div>
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddCertificate

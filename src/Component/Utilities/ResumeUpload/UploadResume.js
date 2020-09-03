import React from 'react'
import { Modal,message, Button,Card, DatePicker, Space , Row, Col,} from 'antd';
import Resume from './Resume';
import FileUpload from '../../../FileUpload/FileUpload';

class UploadResume extends React.Component {
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
        message.success(' successfully uploaded your resume  ');
        }, 2000);
    };
    

  render() {
 
    return (
      <>
        
        <Resume  openModal={this.showModal}/>
            <Modal
                title={[<span className="text-center text-primary">Upload your Resume</span>]}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                        Save
                    </Button>,
                ]}                      
                >
                <Card  bordered={false} >
                    <div className="text-center">
                      <FileUpload title ="" filetitle="Upload your Resume"/>
                      <div className=' mt-2 text-muted w-100 '><span  style={{color:"blue"}}>Supported Formates: doc, docx, rft, pdf upto 5 MB</span></div>
                    </div>
                </Card>
            </Modal>
      </>
    );
  }
}

export default UploadResume

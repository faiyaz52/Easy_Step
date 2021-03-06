import React from 'react'

import { Modal,message, Button,Card, DatePicker, Input,Form , Row, Col,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import './Education.css'
import AddEduDetails from './AddEduDetails';
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
                  <AddEduDetails/> 
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddEducation

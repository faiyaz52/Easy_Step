import React from 'react'

import { Modal,message, Button,Card,} from 'antd';
import AddNewCard from '../Utilities/ResumeUpload/AddNewCard/AddNewCard';
import AddDetails from './AddDetails';
import Skill from '../Skill/Skill';

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
                <AddDetails/>
                </Card>
            </Modal>
      </>
    );
  }
}

export default AddWorkExpereince

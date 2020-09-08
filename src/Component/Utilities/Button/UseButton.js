import React from 'react'
import { message, Button} from 'antd';


class UseButton extends React.Component {
  state = { visible: false };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        message.success(' successfully submitted ');
        }, 1000);
    };
    

  render() {
   
    return (
      <>
 
    <Button key="submit" htmlType="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
        Save
    </Button>
           
      </>
    );
  }
}

export default UseButton

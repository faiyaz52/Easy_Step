import React from 'react';
import {  Card,  CardBody,} from 'reactstrap';  
import './AddNewCard.css'

class AddNewCard extends React.Component{

  render(){


    return (
          <div className="h-100 ml-1 ">
              <Card style={{ width: 266 }} className="h-100 dask_border shadow-sm profile_card" onClick={this.props.openModal}>
                  <CardBody className="d-flex justify-content-center align-items-center pointer text-primary" >
              <div >
                <p><ion-icon name="add-circle-outline" className="text-primary"></ion-icon> <span className="inline-block ml-0"> {this.props.title}</span></p>
              </div>
              </CardBody>
            </Card>
  
       
          </div> 
    )
  }
}
export default AddNewCard

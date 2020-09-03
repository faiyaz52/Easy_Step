import React from 'react'
 import './ResumeUpload.css'
 import { Popconfirm, message } from 'antd';
import UploadResume from './UploadResume'

const ResumeUpload =()=>{

  function confirm(e) {
    console.log(e);
    message.success('Deleted your Resume');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Not Deleted your resume');
  }
  return(
        <>
        <div className ="separete_upload_parent">
             <div className="resume_upload d-flex justify-content-between mt-5 p-3 ml-2">
            <div className="d-flex align-items-center  ml-2">
              <ion-icon name="document-text-outline" style={{ zoom: 2.0 }}></ion-icon>
              <div> <h4 className=" resume_name m-0">Resume.docx</h4>
                <p className=" resume_name m-0" >16 Sep, 2020 at 11:06 120kb</p></div>
            </div>
            <div className="d-flex align-items-center ml-2">
             
                            <Popconfirm
                  title="Are you sure delete your resume?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
               <button className={"hvr_icon m-0 p-2 text-muted btn bg-transparent"}>
                <ion-icon name="trash-outline"></ion-icon>
              </button>
            </Popconfirm>
              <button className={"hvr_icon m-0 p-2 text-muted btn bg-transparent"}>
                <ion-icon name="cloud-download-outline"></ion-icon>
              </button>
            </div>
              <UploadResume/>
          </div>
        </div>
        </>
  )
}

export default ResumeUpload

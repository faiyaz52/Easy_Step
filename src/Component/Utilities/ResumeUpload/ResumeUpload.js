import React from 'react'
 import './ResumeUpload.css'
const ResumeUpload =()=>{

  return(
        <>
        <div className ="separete_upload_parent">
             <div className="resume_upload d-flex justify-content-between mt-5 p-3 ml-2">
            <div className="d-flex align-items-center  ml-2">
              <ion-icon name="document-text-outline" style={{ zoom: 2.0 }}></ion-icon>
              <div> <h4 className=" resume_name m-0">Resume.docx</h4>
                <p className=" resume_name m-0" >16 Sep, 2020 at 11:06 120kb</p></div>
            </div>
            <div className="d-flex align-items-center  ml-2">
              <button className={"hvr_icon m-0 text-muted btn bg-transparent"}>
                <ion-icon name="trash-outline"></ion-icon>
              </button>
              <button className={"hvr_icon m-0 text-muted btn bg-transparent"}>
                <ion-icon name="cloud-download-outline"></ion-icon>
              </button>
            </div>
            <button className="btn btn-sm btn-primary text-sm ml-2"> UPLOAD RESUME </button>
          </div>
        </div>
        </>
  )
}

export default ResumeUpload

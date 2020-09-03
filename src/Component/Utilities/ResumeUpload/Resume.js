import React from 'react'

const Resume = (props)=>{
    return (
        <>
        <div >
            <button className="btn btn-sm btn-primary text-sm ml-2" onClick={props.openModal}> Upload Resume </button>
        </div>
        </>
    )
}
export default Resume;
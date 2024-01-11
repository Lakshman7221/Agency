import React from 'react'
import "./StartNewProject.scss"
const StartNewProject = () => {
  return (
    <div className='newProject container'>
        <div className='text-center'>
            <h1><span style={{opacity:"70%"}}>START YOUR</span> <b>NEW PROJECT</b></h1>
            <div style={{opacity:"70%"}}>Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Vero esse sunt quasi sapiente tenetur qui!</div>
            <div style={{opacity:"70%"}}> consectetur adipisicing elit. Vero esse sunt quasi sapiente.</div>
        </div>
        <div className='inputSection pt-4'>
            <input type="text" className='form-control gap-1' placeholder='Full Name'/>
            <input type="text" className='form-control' placeholder='Email'/>
            <input type="text" className='form-control' placeholder='Phone Number'/>
            <div className='submit w-100'>SEND</div>
        </div>
    </div>
  )
}

export default StartNewProject
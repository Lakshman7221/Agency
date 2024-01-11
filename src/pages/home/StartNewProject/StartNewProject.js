import React from 'react'
import "./StartNewProject.scss"
const StartNewProject = () => {
  return (
    <div className='newProject'>
        <div className='title text-center'>
            <h1><span style={{opacity:"70%"}}>START YOUR</span> <b>NEW PROJECT</b></h1>
            <div className='para' style={{opacity:"70%"}}>Lorem ipsum dolor sit amet consectetur sit amet consectetur consectetur adipisicing elit. Vero esse sunt quasi sapiente. adipisicing elit. Vero esse sunt quasi sapiente tenetur qui!</div>
        </div>
        <div className='inputSection pt-4'>
            <input type="text" className='form-control gap-1' placeholder='Full Name'/>
            <input type="text" className='form-control' placeholder='Email'/>
            <input type="text" className='form-control' placeholder='Phone Number'/>
            <div className='submit'>SEND</div>
        </div>
    </div>
  )
}

export default StartNewProject
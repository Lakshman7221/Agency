import React from 'react'
import { IoBulbOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { PiUsersThree } from "react-icons/pi";
import { MdAccessTime } from "react-icons/md";
import "./Adeventages.scss" 
import StartNewProject from '../StartNewProject/StartNewProject';
const Adventages = () => {
  return (
    <>
        <div className='AdvantageHeadline'>
            <div className='py-3 adeventageTitle'>
                <div className='headerLine text-center' style={{color:"#37517e"}}>OUR <span>ADVENTAGES</span></div> 
            <p style={{opacity:"70%"}} className='text-center'>Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Vero esse sunt quasi sapiente tenetur qui!</p>
            </div>
            <div className='AdeventageCards pb-4'>
                <div style={{opacity:"80%"}}>
                    <div style={{width:"230px", background:"#f1f1f1"}} className='text-center py-4'>
                    <div> <IoBulbOutline size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> INNOVATION</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio. Magni.</div>
                    </div>
              </div>
                <div style={{opacity:"80%"}}>
                    <div style={{width:"220px", background:"#f1f1f1"}} className='text-center py-4'>
                    <div> <SlLike size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> QUALITY</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio. Magni.</div>
                    </div>
              </div>
                <div style={{opacity:"80%"}}>
                    <div style={{width:"220px", background:"#f1f1f1"}} className='text-center py-4'>
                    <div> <MdAccessTime size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> EXPERIENCE</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio. Magni.</div>
                    </div>
              </div>
                <div style={{opacity:"80%"}}>
                    <div style={{width:"220px", background:"#f1f1f1"}} className='text-center py-4'>
                    <div> <PiUsersThree size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> HAPPY CLIENTS</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio. Magni.</div>
                    </div>
              </div>
                <div style={{opacity:"80%"}}>
                    <div style={{width:"220px", background:"#f1f1f1"}} className='text-center py-4'>
                    <div> <TiMessages size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> SUPPORT</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio. Magni.</div>
                    </div>
              </div>
            </div>

            <div style={{backgroundColor:"#f1f1f1"}}>
                <StartNewProject/>
            </div>
        </div>
    </>
  )
}

export default Adventages
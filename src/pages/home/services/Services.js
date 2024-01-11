import React from 'react'
import { RiPagesLine } from "react-icons/ri";
import { SiTaichigraphics } from "react-icons/si";
import { TbBrand4Chan } from "react-icons/tb";
import { SiCoinmarketcap } from "react-icons/si";

import "./Services.scss" 
const Services = () => {
  return (
    <>
        <div className='AdvantageHeadline'>
            <div className='py-3 adeventageTitle py-4'>
                <div className='headerLine text-center' style={{color:"#37517e"}}>OUR <span>SERVICES</span></div>
                <p style={{opacity:"70%"}} className='text-center'>Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. <br/> Vero esse sunt quasi sapiente tenetur qui!</p>
            </div>
            <div className='AdeventageCards pb-2'>
                <div className='ServiceCardBox'>
                    <div style={{width:"250px"}} className='text-center py-4'>
                    <div> <RiPagesLine size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> WEBDESIGN</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio.</div>
                    <div className='serviceBtn btn-sm'>READ MORE</div>
                    </div>
              </div>
                <div className='ServiceCardBox'>
                    <div style={{width:"250px"}} className='text-center py-4'>
                    <div> <SiTaichigraphics size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> GRAPHIC DESIGN</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio.</div>
                    <div className='serviceBtn btn-sm'>READ MORE</div>
                    </div>
              </div>
                <div className='ServiceCardBox'>
                    <div style={{width:"250px"}} className='text-center py-4'>
                    <div> <TbBrand4Chan size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> BRANDING</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio.</div>
                    <div className='serviceBtn btn-sm'>READ MORE</div>
                    </div>
              </div>
                <div className='ServiceCardBox'>
                    <div style={{width:"250px"}} className='text-center py-4'>
                    <div> <SiCoinmarketcap size={50} color="#37517e"/> </div>
                    <h6 className='pt-3' style={{fontWeight:"bold"}}> MARKETING</h6>
                    <div style={{fontSize:"13px", padding:"15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error amet quae provident distinctio.</div>
                    <div className='serviceBtn btn-sm'>READ MORE</div>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Services
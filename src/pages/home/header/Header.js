import React from 'react'
import "./Header.scss"
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../../../img/hero-img.png"
const Header = () => {
const onlineUrl = "https://www.networkgeek.in/dclastfinal3.png"

  return (
    <>
      <div className='flexBox'>
        <div className='container containerBox'>
        <div className='Respn'>
          <div className='headerHeading pb-2'>WE ARE EXPERTS</div>
          <div className='pb-3 lead text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In hic recusandae nesciunt quis labore unde!</div>
          <div className='readMore mb-3'> READ MORE &nbsp; &nbsp;<FaArrowRight size={25}/></div>
        </div>
        <div className='imgView'>
          <div className='p-5'>
            {/* <img src="/hero-img.png" alt="headerImage" width="450px" height="450px;" /> */}
            <img src={img1 || onlineUrl} width="450px" height="450px;" alt="headerImageView" />
            {/* <img src="https://www.networkgeek.in/dclastfinal3.png" alt="headingImagechaged" width="450px" height="380px;" /> */}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Header
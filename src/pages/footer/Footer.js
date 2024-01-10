import React from 'react'
import "./Footer.scss"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div style={{backgroundColor:"#37517e", color:"white"}}>
        <div className='container py-4 d-flex flex-wrap justify-content-between'>
            <div className='px-3'>
                <h1 style={{fontWeight:"bold"}}>AGENCY</h1>
                <p style={{opacity:"70%", fontSize:"14px"}}className='lead '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus inventore q dolores necaerat consectetur explicabo ipsa culpa exercitationem voluptate molestias!
                Suscipit, eaque laudantium. Eveniet odit nisi aspernatur aliquid, quod nostrum aliquam necessitatibus quibusdam. Nihil quas possimus tempora uam fugiat explicabo odit!
                Odit, autem quaerat esse, necessitatibus facere dolorem nam cumque illo in sed mollitia quos voluptates vitae similique voluptatibusibero labore!</p>
                 <hr />
            </div>
       
            <div className='px-3 py-3'style={{opacity:"70%"}}>
                <h4>Services</h4>
                <div><a href="#">Lorem Imposuim</a></div>
                <div><a href="#">ipsum dolor</a></div>
                <div><a href="#">Amet Con</a></div>
            </div>
            <div className='px-3 py-3' style={{opacity:"70%"}}>
                <h4>Useful Links</h4>
                <div><a href="#">Lorem Imposuim</a></div>
                <div><a href="#">Lorem </a></div>
                <div><a href="#">Imposuim</a></div>
            </div>
            <div className='px-3 py-3' style={{opacity:"70%"}}>
                <h4>Contacts</h4>
                <div>(123) 456-78-90</div>
                <div>(321) 236-65-1</div>
                <div>info@website.com</div><br/>
                
            </div>
            <div className='px-3 py-3' style={{opacity:"70%"}}>
                <div>
                <h4>Follow</h4>
                    <a href='#'><FaFacebook size={25} color="white"/></a>&nbsp;&nbsp;
                    <a href='#'><AiFillTwitterCircle size={25} color="white"/></a>&nbsp;&nbsp;
                    <a href='#'><RiInstagramFill size={25} color="white"/></a>&nbsp;&nbsp;
                    <a href='#'><FaLinkedin size={25} color="white"/></a>&nbsp;
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
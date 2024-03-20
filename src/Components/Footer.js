import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
    AiFillLinkedin,
    AiFillFacebook
  } from "react-icons/ai"
  import { Avatar } from '@chakra-ui/react'
  import img from '../assets/menufy2.png'
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
          className='yy'/>

        <h2  className='my'>MenuFy</h2>
        <p className='my'>@All right reserved</p>
        
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
         
          <a href="https://www.instagram.com/tech_ankit07/?igsh=MXgxdmRzbWt3NDJybg%3D%3D" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-01a52827b/?original_referer=https%3A%2F%2Fankit071105.github.io%2F" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100055383093406" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://github.com/ankit071105" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
        <br/>
          <p>Mobile No : +919031358194</p>
          <p>Email : menufy09@gmail.com</p>
          <p>Adress : Jamshedpur</p>
      </aside>
      <a href="#nav">
        <AiOutlineArrowUp />
      </a>
      
      
    </footer>
  )
}

export default Footer
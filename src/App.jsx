import { useState } from 'react'
import './App.css'
import profile from './img/photo2.jpg'
import insta from './img/inta.jpg'
import linked from './img/lin.png'
import github from './img/github.png'
import pdf from'./img/gokulakrishnan.pdf'
import ecom from './img/ecommerce.gif'
import { GoDownload } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

import { MdFileDownload } from "react-icons/md";



function Slides(){
  const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('slide');
});
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <nav className='nav'>
        
       <h1>Gokulakrishnan</h1>
       <ul>
      <a href="https://github.com/GokulakrishnanSivalingam"><li>Github</li></a>
     <a href="https://mail.google.com/mail/u/0/#sent?compose=sivalingamgokulakrishnan@gmail.com"><li>contact</li></a>
      
       </ul>
      
       <div className="hamburger">
   
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>
        </nav>
        <center>
        <div className="img">
        
        <img src={profile} alt="img"  /></div><br></br>
    <div className="myname">  <h2 ></h2></div><br></br>
        <h2>The Only Way To Do Great<br></br> Work 
          Is Love What You Do!</h2><br></br>
            <p>Pre-Final Year | Full-Stack Developer
            </p>
            <br></br>
            <a href={pdf} download> <button>Resume <MdFileDownload/></button></a>
            <br></br>
            <div className="logo">

                <a href="https://www.instagram.com/__gokul_bala__/?next=%2F&hl=en"><img src={insta} alt="image"/></a>
                <a href="https://github.com/GokulakrishnanSivalingam"> <img src={github} alt="image"/></a>
                <a href="https://www.linkedin.com/in/gokulakrishnan-s-01890b312/"><img src={linked} alt="image"/></a>
            </div>

            </center>  <br></br>
            <h1>Project:</h1>
            <div className="container">
        
          
            <p>
            <h3>E-Commerce Site</h3>.<br></br>Ecommerce, also known as electronic commerce, refers to the
               buying and selling of products or services online.
               You can complete an eCommerce transaction using any device that
                connects to the internet computers, smartphones,tablets, etc.,
               and you can buy almost 
               <br></br>anything: clothing, music, stocks, plane tickets, medicine, and more   <br></br>     <br></br>        
                  <a href="https://gokulakrishnansivalingam.github.io/e-comerce/mainpage.html"> <button>click <FaExternalLinkAlt/></button></a></p>
                   <img src={ecom} alt="" />
               

              
               
            </div>
  
          <footer>
            <div className="footer">
            <center>
                <p>&#169;copyrights |
                    <a href="privacy.html"> privacy policy </a> | personal site
                </p>
                </center>
                
                
                </div>
                </footer>
              
                </div>
                
        
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react';
import { ContactWrap } from './ContactStyle';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    const [ani2 , setAni2 ]= useState(false);
    const [ani3 , setAni3 ]= useState(false);

    

    const url = 'https://github.com/0515khj'


       useEffect(()=>{
        setTimeout(()=>{
            setAni2(true);
            setAni3(true);
        },1000)
       },[])

    return (
        <ContactWrap>

<div className={`contact-details-container ${ani2 ? 'move2' : ''}`}>

<div className="contact-img">
    <img src="./images/contact.jpg" alt=""/>
</div>

<div className={`contact-details ${ani3 ? 'move3' : ''}`}>

  <div className="head">
  <h3><span>Tel</span></h3>
  <p>010 6543 9118</p>
  </div>

  <div className="head">
  <h3><span>Email</span></h3>
  <p>kh32100@naver.com</p>
  </div>

  <div className="head">
  <h3><span>GIT</span></h3>
  <p><button onClick={()=>window.open(url)} className='git-button'>0515khj</button></p>
  </div>

  <strong>THANK YOU !</strong>
  
</div>


</div>

        </ContactWrap>
    );
};

export default Contact;
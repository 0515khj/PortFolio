import { AboutWrap, Chat, Chatbubble} from "./AboutStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiDotsHorizontalRounded } from "react-icons/bi";





const About = () => {
  
  const [ani2 , setAni2 ]= useState(false);

  const [msgs , setMsgs]=useState([]);
  
  const talk = [
    "안녕하세요!",
    "포트폴리오를 제작한 김현진 입니다.",
    "개발에 대한 열정으로 열심히 실력을 쌓고있습니다!",
    "다양한 아이디어와 자료들을 보고 기술로 구현하는 과정이 저에게 즐거움을 줍니다  ",
    "저는 새로운 도전을 두려워 하지 않고 꾸준한 노력과",
    "공부 통해 계속해서 성장하는 사람이 될것입니다!",
    "성실함과 열정을 바탕으로 회사에 도움이되는 프론트엔드 개발자가 되고자 합니다.",
    "감사합니다!",
  ]

  useEffect(()=>{
    const timers = [];
    talk.forEach((msg,idx)=>{
     const timer = setTimeout(()=>{
        setMsgs(premsg =>[...premsg,msg]);
      },(idx + 0.5) ); // 1.5초 간격으로 메세지 등장
      timers.push(timer); 
    });
    return () => timers.forEach(clearTimeout); //컴포넌트 언마운트시 모든 타이머 클리어
     
  },[]);


   useEffect(()=>{
    setTimeout(()=>{
        setAni2(true);
    },1000)
   },[])

    return (
        <AboutWrap>
      <div className={`allp ${ani2 ? 'move2' : ''}`}>
        <Chat>
          <p><BiDotsHorizontalRounded /></p>
          {
            msgs.map((msg,idx)=>(
              <Chatbubble key={idx} delay={idx * 1}>{msg}</Chatbubble>
            ))
          }
        </Chat>
        </div>
        <div className={`pic ${ani2 ? 'move2' : ''}`}>
          <div className="pic2">
          <span> H E L L O !</span>
          <img src="./images/aboutpic.jpg" alt="" />
          </div>
        </div>

        </AboutWrap>
    );
};







export default About;

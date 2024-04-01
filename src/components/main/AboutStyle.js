   import styled from 'styled-components';

   export const Chat = styled.div`
	 display: flex;
	 flex-direction: column;
	 width: 600px;
	 color: #000;
	 height: 550px;
	 padding: 20px;
	 background-color: #000;
	 border: 3px solid #fff;
	 margin: 0 auto;
	 border-radius: 20px;
	 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	 overflow: hidden;
	 
	 @media all and (min-width:480px) and (max-width:767px) { 
		width: 350px;height:480px;
       
	}
	@media all and (max-width:479px) { 
		  width: 200px;height:420px;
	}
   `;
   
   export const Chatbubble = styled.div`
	 background: #ececec;
	 line-height: 1.2;
	 margin: 10px 0;
	 border-radius: 18px;
	 padding: 12px 18px;
	 max-width: 80%;
	 align-self: ${({ delay }) => (delay % 2 === 0 ? 'flex-end' : 'flex-start')};
	 opacity: 0;
	 animation: fadeIn 0.5s ease ${({ delay }) => `${delay}s`} forwards;
   
	 @keyframes fadeIn {
	   from {
		 transform: translateY(20px);
	   }
	   to {
		 transform: translateY(0);
		 opacity: 1;
	   }
	 }
   
	 
	 @media all and (min-width:480px) and (max-width:767px) { 
		
		font-size:15px;
	   padding: 6px 11px;
}
@media all and (max-width:479px) { 
       font-size:10px;
	   line-height:1.1;
	   padding: 6px 11px;
}
   `;
   
   export const AboutWrap = styled.div`
	 overflow: hidden;
	 height: 100vh;
	 position: relative;
   
	 .allp {
	   opacity: 0;
	   position: absolute;
	   top: 10%;
	   left: 20%;
   
	   p {
		 width: 100px;
		 height: 30px;
		 background: #000;
		 color: #fff;
		 font-size: 50px;
		 text-align: center;
		 align-items: center;
		 display: flex;
		 justify-content: center;
		 border: 2px solid #fff;
		 border-radius: 20px;
		 position: absolute;
		 top: 3%;
		 left: 42%;
	   }
	 }
   
	 .pic {
		opacity: 0;
	}
	.pic2 {
			 animation: fly 1.5s ease-in forwards;

		  span {
		 margin: 50px;
		 padding: 20px;
		 color: #000;
		 font-weight: 600;
		 font-size: 20px;
		 border-radius: 20px;
		 background-color: #fff;
		 position: absolute;
		 top: 100px;
		 right: 18%;
   
		 &::after {
		   content: "";
		   position: absolute;
		   top: 55px;
		   right: 30px;
		   border-top: 30px solid #fff;
		   border-right: 20px solid transparent;
		   border-left: 20px solid transparent;
		   border-bottom: 10px solid transparent;
		 }
	   }
	   

	   img {
		 width: 300px;
		 height: 300px;
		 border-radius: 20px;
		 position: absolute;
		 top: 250px;
		 right: 300px;
	   }
	}

	
	 .move2 {
	   animation: fade 1s ease-in forwards;
	   opacity: 1;
   
	   
	 }
   
	 @keyframes fade {
	   from {
		 opacity: 0.1;
	   }
	   to {
		 opacity: 1;
	   }
	 }
   
	 @keyframes fly {
	   from {
		 transform: translateX(100%);
		 opacity: 0;
	   }
	   to {
		 transform: translateX(0);
		 opacity: 1;
	   }
	 }
   
	 @media (min-width:1550px){
		.pic{display:none;}
	 }
	 @media all and (min-width:480px) and (max-width:767px) { 
		position: relative;
		.allp{top:20%; left:17%; 
			p{left:43%; width:60px; height:20px;
			}
		}
		.pic{display:none;}
       
}
@media all and (max-width:479px) { 
	position: relative;
		.allp{
			top:10%; left:17%; 
			p{left:43%; width:30px; height:20px;
			}
		}
		.pic{display:none;}
       
}

   `;


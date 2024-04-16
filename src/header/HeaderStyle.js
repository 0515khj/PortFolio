import styled from 'styled-components'

export const LayoutWrap = styled.div`
.layout{
	background: #000;
	height:100vh;
	overflow-y:hidden;
}

.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #999;
    z-index: 10;
    animation: up 0.7s ease-in forwards;
}

@keyframes up {
    from{ transform: translateY(0);
    }
    to { transform: translateY(-100%); 
    }
}

`
/* ********************************************* */
export const HeaderWrap = styled.header`
  
`

/* ************************************************* */
export const NavWrap = styled.nav`

.khj.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #999;
  z-index: 1000;
  animation: down 0.7s ease-in forwards; 
} 

.btn{
  opacity: 0;
     background: #000;
     padding-top: 25px;
     text-align: center;
    
	
} 
.hidden {
  opacity: 0;
  transition: opacity 0.7s ease-in;
}

@keyframes down {
  from {
    transform: translateY(-100%); 
  }
  to {
    transform: translateY(0); 
  }
}

.btn.move2, .contact-details-container.move2 {
  animation: moveContent 0.7s ease-in forwards; // 애니메이션이 끝난 후에 내용이 들어오는 애니메이션
}

@keyframes moveContent {
  0% {
    opacity: 0;
    transform: translateY(20px); /* 약간 아래에서 시작 */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* 최종 위치로 */
  }
}


.button-wrapper{
  display:inline-block;
  text-align:center; 
  align-items:center;
  justify-content:center;
  position: relative;
  cursor: pointer;
  margin:0 10px;
}

.button-wrapper button {
	font-size:35px;
  letter-spacing:5px;
  font-family:fantasy;
	background-color:transparent;
	color:#fff; 
	transition: color 0.5s ease-in;
	cursor: pointer;
}
.button-wrapper:hover button {
	color:#A1887F;
}
.buttonbottom{
	width: 0;
	height: 2px;
	background-color:#fff; 
	position:absolute; bottom: 50%;
	transition:all 0.5s ease-in; 
}
.button-wrapper:hover .buttonbottom {
	width: 100%;
	background-color: #fff;
}

.button-wrapper .buttonbottom.active, .button-wrapper.active button {
  width: 100%;
  height:2px;
  color: #A1887F; /* 버튼 텍스트 색상을 변경하고 싶은 경우 */
}

.move2{
	animation:fade 1s ease-in forwards;
	opacity: 1;
	
}

@keyframes fade {
	from {
		opacity:0;
	}
	to {
		opacity: 1;
	}};

   @media (max-width:728px) {

   .btn{
    .button-wrapper{
      button{ font-size:15px;}
    }
   }

   }

   @media all and (min-width:480px) and (max-width:767px) { 
    .btn{
    .button-wrapper{
      button{ font-size:30px;}
    }
   }
	}

  @media all and (max-width:479px) { 
    .btn{
    .button-wrapper{
      button{ font-size:16px;}
    }
    .button-wrapper button{letter-spacing:1px;}
   }
	}
    


`
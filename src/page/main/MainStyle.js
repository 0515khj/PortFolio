import styled from 'styled-components'


export const Main2Wrap = styled.div`
 
.mainf {
	background: none;
	
	position:absolute;top:50%; left:20%;
}


.text{
		 position:absolute; bottom:100px; right:100px;
		font-size:100px;
		color:#fff;
		font-family: 'Arial';
		font-weight:600;
		line-height:1.2; 
	
}
.text span {
	opacity:0;
	display:inline-block; // span 태그를 인라인 블록 요소로 만들어줌
	transform:translateX(-50px); // 원래 위치에서 왼쪽으로 벗어나게 한다.
	animation: slideIn 0.5s forwards; // slideIn 애니메이션 이름과 지속 시간 설정
}
@keyframes slideIn {
	from {
		opacity:0;
		transform:translateX(-50px); // 왼쪽에서 시작한다.
	}
	to{
		opacity: 1;
		transform:translateX(0); // 원래 위치로
	}
}

.move2{
	
	animation:fade 2s ease forwards;
@keyframes fade {
	from {
		opacity:0.1;
	}
	to {
		opacity: 1;
	}
}
	opacity: 1;
}

@media all and (min-width:480px) and (max-width:767px) { 
.text span{
		font-size:60px;
	}
}
@media all and (max-width:479px) { /*스타일입력*/
.text span{ font-size:40px;}
}


`


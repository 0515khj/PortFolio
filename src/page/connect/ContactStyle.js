import styled from 'styled-components'


export const ContactWrap =styled.div`
position: relative;
height:100%;
overflow:hidden;

.contact-details-container{
    opacity: 0;
    position:absolute; top:20%;left:10%;
    display:flex;
    color:#fff;
    justify-content:space-between;
    gap:4%;
    width:80%;
    height:auto;
    margin:auto;
    border:none;
}
.contact-details{
    width:40%;
    margin-right:2%;
	position: relative;
    position:absolute; top:20%; right:0;
	font-size:30px;
	.head{margin-bottom:40px;
		margin-top:10px;
		letter-spacing:0.5rem;
		h3{font-weight:900;
			font-style:italic;
			margin-bottom:65px;
			
		}
		h3 span{
			border-bottom: 2px solid #fff;
			padding-bottom:15px;

		
		}
		p{
		margin-bottom:50px;
		padding-left:50px;
			font-weight:500;
			button {
				letter-spacing:0.5rem;
			color:#fff; 
			font-size:30px;
			background: none;
			cursor: pointer;
			&:hover{ color: yellow;
			transform:scale(1.2);
			 text-decoration:line-through;
			}
			}
	}
	}

	strong{
		margin-top:110px;
		letter-spacing:1rem;
	}
  
}


.contact-img{
    position:absolute; top:20%;left:0;
    width:52%;
    padding-top: 27%;
    img{
        position:absolute; top:77%;left:50%;
        transform:translate(-50%,-50%);
        width:100%;
        height:600px;
    }
}


.move3 , .move2{
	animation:fade 0.5s ease-in forwards;
	opacity: 1;
	h3{
		animation:fly-in 4s ease-out forwards;
	}
	p{
		animation:fly 3s ease-out forwards;
	}
}
@keyframes fade {
	from {
		opacity:0.1;
	}
	to {
		opacity: 1;
	}};
@keyframes fly-in {
		from{
			transform:rotateX(360deg);
			opacity:0;
		}	
		to{
			transform:rotateX(0);
			opacity:1;
		}
	}
@keyframes fly {
		from{
			transform:translateX(100%);
			opacity:0;
		}	
		to{
			transform:translateX(0);
			opacity:1;
		}
	}

	@media (max-width:728px) {
		

        .contact-img{
        width: 100%; /* 화면이 728px 아래로 줄어들 때 이미지가 전체 폭을 차지하도록 설정 */
        padding-top: 0; /* 패딩값 조정 */
        img{
            width: 100%; /* 화면의 크기에 자동으로 맞춰짐 */
            position: static; /* 이미지를 일반적인 문서 흐름에 포함되도록 바꿈 */
            height: 600px;
            max-width: 250px; /* 최대 크기 제한해서 이미지가 크게 확대되지 않도록 함 */
            margin-top: 300px;
			margin-left: 80px;
			
        }
    }
		
       

    }

	@media all and (min-width:480px) and (max-width:767px) { 
        .contact-details{
			width:48%;
			font-size:20px;
			overflow-wrap: break-word; 
  			word-break: break-all; 
			  strong{
		margin-top:110px;
		letter-spacing:10px;
	}
		}
		.contact-img{
			width: 100%; /* 화면이 728px 아래로 줄어들 때 이미지가 전체 폭을 차지하도록 설정 */
        	padding-top: 0; /* 패딩값 조정 */
        img{
            width: 100%; /* 화면의 크기에 자동으로 맞춰짐 */
            position: static; /* 이미지를 일반적인 문서 흐름에 포함되도록 바꿈 */
            height: 600px;
            max-width: 350px; /* 최대 크기 제한해서 이미지가 크게 확대되지 않도록 함 */
            margin-top: 250px;
			margin-left: 120px;
			
        }
    }

	}
	@media all and (max-width:479px) { 
        .contact-details{
			width:auto;
			font-size:20px;
			overflow-wrap: break-word; 
  			word-break: break-all; 
		}
		.contact-img{
        img{
           display:none;
			
        }
    }
	}




`

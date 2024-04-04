import styled from 'styled-components'

export const JavaScriptWrap = styled.div`
position: relative;
overflow:hidden;
height:100vh;

.javascrip-details-container{
    opacity: 0;
    position:absolute; top:10%;left:10%;
    display:flex;
    color:#fff;
    justify-content:space-between;
    gap:4%;
    width:80%;
    height:auto;
    margin:auto;
    border:none;
}
.codebtn {margin-left:5px;
    background: #000; color:#fff;
    &:hover {}
}
.javascrip-details{
    width:48%;
    margin-right:2%;
    strong{display:block;
        font-size:25px; font-weight:600;
    padding-bottom:10px;
    margin-bottom:40px;
    }
    h2{border-top: 1px solid #fff;
        font-size:80px;
        font-weight:900;
        padding-top:30px;
        margin-bottom:30px;
        font-family:cursive;
    }
    p{font-size:20px;margin-bottom:30px;}
    .infop{font-size:25px; margin-bottom:50px; line-height:1.5; width:100%; max-width:580px;
        height:50px;
    }
    button{
        position: relative;
        overflow:hidden;
        color:#000; 

        background:#fff;
        width:200px; height: 50px;
        font-size:30px;
        font-weight:600;
        border-radius:20px;
        text-align:center;
        border: 2px solid #000;
        transition : background-color 0.5s ease, border-color 1s ease;
        cursor: pointer;
        &:hover{
            color:#fff;
            border-color:#fff;
            background-color:#000;
        }
    }
  
}
.javascrip-img{
    position: relative;
    position:absolute; top:20%;left:50%;
    width:48%; 
    padding-top: 27%;
    background-image:url('./images/tv1.jpg');
    background-repeat:no-repeat;
    background-size:contain;
    background-position: center;
    img{
        position:absolute; top:50%;left:50%;
        transform:translate(-50%,-50%);
        width:80%;
        height:80%;
    }
}
.javascrip-select{
    p{ width:90px; margin-bottom:20px; margin-left:-15px;
        font-style:italic;
        font-weight:900;
    animation: blink 0.5s ease-in-out infinite alternate;
    }
    position:absolute; top:20%;right:-7%;
    display:flex;
    margin-bottom:30px;
    flex-direction:column;
    justify-content:center;
    margin-top:20px;
}
.select-btn{
    cursor: pointer;
    background: #000;
    padding: 10px;
    margin:0 5px;
    margin-bottom:30px;
    border-radius:20px;
    background: none;
    width:40px;
    border: 2px solid #fff;
}
.select-btn.active {
    background: #fff;
}

 .move2{
	animation:fade 0.5s ease-in forwards;
    opacity: 1;
} 


@keyframes fade {
    from {
        opacity:0.1;
    }
    to {
        opacity: 1;
    }};
@keyframes blink {
        0% {opacity: 0.5;}
        100% {opacity: 1;}
    }

    /* @media (max-width:728px) {
        position: relative;
        .javascrip-details{
            h2{font-size:28px;}
            p{ font-size:15px;}
            .infop{font-size:18px;}
            button{width:100px; font-size:17px;}
        }

        .javascrip-select{
            display:flex;
            flex-direction:row;
            position:absolute; top:80%; left:40%;
            p{position:absolute; top:70%;}
            button{
                width:25px; height:20px;}
        }

    } */
    @media all and (min-width:769px) and (max-width:1024px){
        .javascrip-details{
            strong{ font-size:30px;}
            h2{font-size:40px;}
            p{ font-size:25px;}
            .infop{font-size:30px;}
            button{width:100px; font-size:17px;}
        }

        .javascrip-select{
            display:flex;
            flex-direction:row;
            position:absolute; top:80%; left:40%;
            p{position:absolute; top:70%;}
            button{
                width:50px; height:30px;}
        }
    }

    @media all and (min-width:479px) and (max-width:768px) {
        .javascrip-details{
            h2{font-size:30px;}
            p{ font-size:18px;}
            .infop{font-size:20px;}
            button{width:80px; font-size:17px;}
        }

        .javascrip-select{
            display:flex;
            flex-direction:row;
            position:absolute; top:80%; left:40%;
            p{position:absolute; top:70%;}
            button{
                width:30px; height:20px;}
        }
    }

    @media all and (max-width:479px) {
        .javascrip-details{
            h2{font-size:28px;}
            p{ font-size:15px;}
            .infop{font-size:17px;}
            button{width:60px; font-size:17px;}
        }

        .javascrip-select{
            display:flex;
            flex-direction:row;
            position:absolute; top:80%; left:40%;
            p{position:absolute; top:70%;}
            button{
                width:25px; height:20px;}
        }
    }

`
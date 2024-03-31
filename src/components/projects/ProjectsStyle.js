import styled from 'styled-components'




export const ProjectListWrap = styled.div`


`
export const ProjectItemWrap = styled.div`
   .project-details-container{
    opacity: 0;
    position:absolute; top:20%;left:10%;
    display:flex;
    /* background: #666; */
    color:#fff;
    justify-content:space-between;
    gap:4%;
    width:80%;
    height:auto;
    margin:auto;
    border:none;
}
.project-details{
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
    }
    p{font-size:20px;margin-bottom:30px;}
    .infop{font-size:25px; margin-bottom:50px; line-height:1.5; width:100%; max-width:580px;}
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
.project-img{
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
        height:auto;
    }
}
.project-select{
    p{ width:90px; margin-bottom:20px; margin-left:-10px;
        font-style:italic;
        font-weight:900;
    animation: blink 0.5s ease-in-out infinite alternate;
    @keyframes blink {
        0% {opacity: 0.5;}
        100% {opacity: 1;}
    }
    }
    position:absolute; top:30%;right:-5%;
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
    /* color:#fff; */
    width:50px;
    border: 2px solid #fff;
}
.select-btn.active {
    background: #fff;
}
`;
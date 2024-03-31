import styled from 'styled-components'

export const GameListWrap = styled.div`
ul{
  display: flex; 
  width: 100%;
  max-width:1300px;
    flex-wrap: wrap; 
    justify-content: space-between; 
    margin: 0 auto;
    padding: 0 45px;
    list-style: none;
    
  }
`



export const GameItemWrap = styled.div`

   /*  .inner{display:flex;
    align-items:center;

        img{width:50%; 
       };
        p{ background:linear-gradient(to right , rgba(255,255,255,0),white)}
    } */
    position: relative;
    width: 400px; 
    margin-bottom:50px;

    .pj1 {
        width: 100%;
        height: 300px;
        perspective: 1000px;
        cursor: pointer;
        border: 2px dotted #e5e5e5;
  .flipper{
    width:100%;
    height:100%;
    transition:transform 0.6s;
    transform-style:preserve-3d;

    .front {
    transition: 1s;
    position: relative;
    display:inline-block;
    img {}
    
    p{
      position: absolute;
                top: 70%;
                left: 50%;
                color: #fff;
                opacity: 0;
                transform: translate(-50%, -50%);
                transition: opacity 0.5s;}
    
}
.front:hover p{ opacity: 1;  font-size:20px;}


.front::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: border-color 0.5s;
  opacity: 0; 
}

.front:hover::after {
  opacity: 1; 
  border-color: #fff; 
}

.front:hover img {
    filter: brightness(45%);
    
}



.infospan {
    opacity: 0;
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    transition:0.3s;
    color:#fff;
}


.front:hover .infospan {
    opacity: 1; 
    font-size:28px; 
}



    .front, .back{
      img{
        width:100%;
        height: 100%; /* 이미지가 회전되도록 설정 */
                    object-fit: cover; /* 이미지가 잘릴 경우에도 비율 유지 */
}

      width:100%;
      height:100%;
      position:absolute;
      backface-visibility:hidden;

    }

    .back{
      background-color:#fff;
      box-shadow:0 32px 64px rgba(0,0,0,0.2);
      color: #000;
      display:flex;
      flex-direction:column;
      transform:rotateY(180deg);
      position: relative;
      button{
        width:100px ;
        height:30px;
        margin-left:30px;
        text-align:center;
        line-height:0.5;
        border:none;
        padding:10px 10px;
        border-radius:20px;
        font-size:15px;
        font-weight:600;
        background: linear-gradient(to right, #E1BEE7 0%, #E1BEE7 50%, #616161 50%, #616161 100%);
        transition: background-position 0.7s ease;
        background-size: 200% 100%;
        cursor: pointer;

        -webkit-animation: blink 1s ease-in-out infinite alternate;
        animation: blink 1s ease-in-out infinite alternate;
         @-webkit-keyframes blink{
        0% {opacity: 0.5;}
        100% {opacity: 1;}
        }
       
      
        @keyframes blink{
        0% {opacity: 0.5;}
        100% {opacity: 1;}
        }


        &:hover{ background-position: 100% 0;
          color:#fff;}
      }






    
      .info{
        font-size:15px;
        margin:10px auto;
        h3{
          font-size:25px;
          font-weight:600;
          color:#6A1B9A;
          margin-bottom:20px;
        }
        h3{margin-bottom:20px;}
        strong{display:block; margin-bottom:20px;}
        em{display:block; margin-bottom:5px; font-style:italic; font-weight:600;}
        p{margin-bottom:20px;}
      }
    }
  }
}

.pj1.active .flipper{
      transform:rotateY(180deg);
    }


`
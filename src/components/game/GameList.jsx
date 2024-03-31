import React, { useState } from 'react';
import { GameListWrap } from './GameStyle';
import GameItem from './GameItem';

const GameList = ({data}) => {
    const [flip , setFlip] = useState(-1)
    
    const ck = (idx) => {
        if(flip === idx){
            setFlip(-1);
        }else{
            setFlip(idx)
        }
    }

    return (
        <GameListWrap>
            <ul>
            {
                data.map((item,idx)=><GameItem key={item.id} item={item} flip={flip === idx} ck={()=>ck(idx)} />)
            }
            </ul>
        </GameListWrap>
    );
};

export default GameList;
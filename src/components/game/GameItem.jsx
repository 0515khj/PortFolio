import React from 'react';
import { GameItemWrap } from './GameStyle';

const GameItem = ({item,flip,ck}) => {
    const {title , dec , img, infospan,url,info,code ,per,view}=item;   
    
    
    return (
        <GameItemWrap>
            <li>
                <div className={`pj1 ${flip ? 'active' : ''}`} onClick={ck}>


                    <div className="flipper">

                        <div className="front">
                            <img src={img} alt="" />
                            <span className="infospan" >{infospan}</span>
                            <p>click</p>
                            
                        </div>

                        <div className="back">
                            <div className="info">
                            <h3>{title}</h3>
                            <strong>{info}</strong>
                            <em>#Period</em>
                            <p>{dec}</p>
                            <em>#Tech</em>
                            <p>{code}</p>
                            <em>#My Contributions</em>
                            <p>{per}</p>
                            <button>view</button>
                            <button onClick={()=>{window.open(url)}}>code</button>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        </GameItemWrap>
    );
};

export default GameItem;
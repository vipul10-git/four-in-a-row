import React from 'react';

const SlotDesign = (props) =>{
    let gamePad= [];
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            gamePad.push(
                <div className="outerCircle" key={`${i}${j}`}>
                    <div className="innerCircle" onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave} data-col={i} data-row={j}   id={`col-${i}--row-${j}`} >
                        <div className='slotImgAad' data-col={i} data-row={j} ></div>
                    </div>
                </div>
            );
        }
    }
    return gamePad
}

export default SlotDesign;

import React from 'react';

const SlotDesign = () =>{
    // myRef = React.createRef();
    let gamePad= [];
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            gamePad.push(
                <div className="outerCircle" key={`${i}${j}`}>
                    <div className="innerCircle" id={`col-${i}--row-${j}`} data-col={i} data-row={j} />
                </div>
            );
        }
    }
    return gamePad
}

export default SlotDesign;
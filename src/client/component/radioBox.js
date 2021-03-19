import React from 'react';

const RadioBox = (props) =>{
    const {value , id} = props;
    return(
        <div className='popupselection displayFlex'>
            <input type="radio" value={value} id={id} name="game"/>
            <label>{value}</label>
        </div>
    )
}

export default RadioBox;
import React from 'react';

const Popup = (props) =>{
    return(
        <div className="popUp">
            <div className='hoverDiv'>
                {props.children}  
            </div>
        </div>
    )
}

export default Popup;
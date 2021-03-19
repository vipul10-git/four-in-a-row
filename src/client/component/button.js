import '../../assets/css/app.css';
import React from 'react';

const Button = (props) =>{
    let {backColor ,txtColor, text , sidImg, clicked, MouseLeave, MouseEnter,width, height} = props;
    return(
        <button onClick={clicked} onMouseLeave={MouseLeave} onMouseEnter={MouseEnter} className='button' style={{backgroundColor : backColor, width:width, height:height}}>
            <div className='displayFlex' style={{justifyContent:'center',alignItems:'center'}}>
                {sidImg && <div><img alt='' src = {sidImg} width='25'/></div>}
                <div style={{color:txtColor,marginLeft:'10px'}}>{text}</div>
                </div>
        </button>
    )
}

export default React.memo(Button);

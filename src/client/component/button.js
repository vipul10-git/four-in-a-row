import React from 'react';

const Button = (props) =>{
    let {backColor ,txtColor, text , sidImg, clicked, MouseLeave, MouseEnter,width, height,font} = props;
    return(
        <button onClick={clicked} onMouseLeave={MouseLeave} onMouseEnter={MouseEnter} className='button ' style={{backgroundColor : backColor, width:width, height:height}}>
            <div className='displayFlex' style={{fontSize:font}}>
                {sidImg && <div><img alt={text} src = {sidImg} width='25'/></div>}
                <div className={sidImg ? 'mL8':''} style={{color:txtColor}}>
                    {text}
                </div>
            </div>
        </button>
    )
}

export default React.memo(Button);

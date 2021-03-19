import React from 'react';
import '../../assets/css/app.css';

const Card = (props) =>{
    let {backColor ,borderColor, text , value, onChange, img, disabled, secondBorder} = props;
    return(
        <div className={`playerCard ${backColor}`}>
            <div className={secondBorder && 'bR50Per borderOrange'}><div className={`bR50Per p6 boxShadow ${borderColor}`}><img src={img} alt='player' className='playerImg'/></div></div>
            <div style={{flex:'5'}}>
                <div className='secondaryFontColor font12 mL8 mB8 textInitial'>{text}</div>
                <input type='text' className={`${backColor} mL4 pL8 font18`}value={value} onChange={onChange} disabled={disabled}/>
            </div>
        </div>
    )
}

export default React.memo(Card);

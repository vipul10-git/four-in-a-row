import React, {useState} from 'react';
import '../../assets/css/app.css';

const Card = (props) =>{
    let {backColor ,borderColor, text , value, onChange, img, disabled, secondBorder, onClick} = props;
    const [addhover, setstate] = useState(null)
    return(
        <div className={`playerCard ${addhover && 'boxShadow'} ${backColor}`} onClick={onClick} onMouseEnter={()=>setstate(true)} onMouseLeave={()=>setstate(false)}>
            <div className={secondBorder && 'bR50Per borderOrange'}><div className={`bR50Per p6 boxShadow ${borderColor}`}><img src={img} alt='player' className='playerImg'/></div></div>
            <div style={{flex:'5'}}>
                <div className='secondaryFontColor font12 mL8 mB8 textInitial'>{text}</div>
                <input type='text' className={`${backColor} mL4 pL8 font18`}value={value} onChange={onChange} disabled={disabled}/>
            </div>
        </div>
    )
}

export default React.memo(Card);

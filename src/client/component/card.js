import React, {useState} from 'react';
import '../../assets/css/app.css';

const Card = (props) =>{
    let {backColor ,borderColor, text , value, onChange, img, disabled, secondBorder, onClick, underLineBorder} = props;
    const [addhover, setstate] = useState(null)
    return(
        <div className={`playerCard ${addhover ? 'boxShadow':undefined} ${backColor}`} onClick={onClick} onMouseEnter={()=>setstate(true)} onMouseLeave={()=>setstate(false)}>
            <div className={secondBorder ? 'bR50Per borderOrange':undefined}>
                <div className={`bR50Per p6 boxShadow ${borderColor}`}>
                    <img src={img} alt='player' className='playerImg'/>
                </div>
            </div>
            <div>
                <div className='secondaryFontColor font12 mL8 mB8 textInitial'>{text}</div>
                <input type='text'  className={`${backColor} ${underLineBorder ? 'bNone': undefined} mL4 pL8 font18`} value={value} onChange={onChange} disabled={disabled}/>
            </div>
        </div>
    )
}

export default React.memo(Card);

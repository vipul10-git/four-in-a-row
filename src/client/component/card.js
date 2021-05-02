import React, {useState, useRef } from 'react';
import '../../assets/css/app.css';

const Card = (props) =>{
    const inputFile = useRef(null) 
    let {backColor ,borderColor, text , value, onChange, img, imgid, disabled, secondBorder, onClick, underLineBorder} = props;
    const [addhover, setstate] = useState(null)
    const opneImageBox = () =>{
        inputFile.current.click();
    }
    const  loadFile = (event) =>{
        var image = document.getElementById(imgid);
        image.src = URL.createObjectURL(event.target.files[0]);
        localStorage.setItem(text,URL.createObjectURL(event.target.files[0]) )
        image.classList.add("bR50Per");
    };

    return(
        <div className={`playerCard ${addhover ? 'avatarShadow':undefined} ${backColor}`} onClick={onClick} onMouseEnter={()=>setstate(true)} onMouseLeave={()=>setstate(false)}>
            <div className={secondBorder ? 'bR50Per borderOrange':'bR50Per borderTransparent'}>
                <div className={`bR50Per p6 avatarShadow ${borderColor}`}>
                    {imgid && <input type="file"  accept="image/*" name="image" ref={inputFile} id="file" onChange={loadFile} style={{display: 'none'}}/> }
                    <img src={img} onClick={imgid ? opneImageBox : ()=> {}} id={imgid ? imgid : text }  alt='player' className={`playerImg ${imgid && 'bR50Per'}`}/>
                </div>
            </div>
            <div>
                <div className='secondaryFontColor font12 mL8'>{text}</div>
                <input type='text'  className={`${backColor} ${underLineBorder ? 'bNone': undefined} mL8 font18`} value={value} onChange={onChange} disabled={disabled}/>
            </div>
        </div>
    )
}

export default React.memo(Card);

import '../../assets/css/wrapper.css';
import BackBtn from '../../assets/images/backBtn.png' 

function Wrapper(props){
    if(window.innerWidth <'1072'){
        return(
            <div className='justifyContent alignCenter displayFlex'>
                MOBILE/TAB VIEW NOT SUPPORTED!!
            </div>
        )
    }else{
        return(
            <div className='wrapper'>
                <div className="xyz">
                    <img src={BackBtn} width='20px' className='backBtn' onClick={()=>window.history.back()}/>
                    <h3 className='m8 navyColor'>{props.pageInfo}</h3>
                    </div>
                {props.children}
            </div>
        )
    }
    
}

export default Wrapper;
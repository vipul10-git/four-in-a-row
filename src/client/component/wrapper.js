import '../../assets/css/wrapper.css';
import BackBtn from '../../assets/images/backBtn.png'

function Wrapper(props) {
    return (
        <div className='wrapper'>
            <div className="xyz">
                <img src={BackBtn} width='20px' className='backBtn' onClick={() => window.history.back()} />
                <h3 className='displayFlex navyColor'>{props.pageInfo}</h3>
            </div>
            {props.children}
        </div>
    )
}

export default Wrapper;
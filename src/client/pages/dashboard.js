import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import '../../assets/css/app.css';
import GAMEIMG from '../../assets/images/4inarow.png';
import Button from '../component/button';
import One from '../../assets/images/one/one.png';
import Two from '../../assets/images/two/two.png';
import Online from '../../assets/images/online/online.png';
import Training from '../../assets/images/training/training.png';
import Play from '../../assets/images/play.jpg';
import ErrorMsgToast from '../component/errorToast';
import Wrapper from '../component/wrapper';

const Dashboard = () =>{
    const [popupshow,setIsShown] =  useState(false)
    let history = useHistory();
    const btnClickHandle=()=>{
        history.push('/add-Player')
    }

    return(
        <Wrapper>
            <div className='container'>
                <div>
                <div className='floatL' style={{marginLeft: '30px'}}>
                    <div className='navyColor font20'>CONNECT FOUR!</div>
                    <p className='secondaryFontColor font12'>Play with other players <br/>around the world.</p>
                </div>
                <img alt='game' src={GAMEIMG} className='mainimg floatR'/>
                </div>
                <div className='mainPageFrame'>
                    <div className='playButton justifyContent alignCenter displayFlex'>
                        <img alt='play' src={Play} width='25px' className='bR50Per'/>
                        <div className='mT10 white'>PLAY</div>
                        </div>
                    <div className='LineDesign'/>
                    <div className='btmMainPost'>
                        <div className='displayFlex justifyContent'>
                            <Button backColor = '#4BABFF' txtColor='white' text='Custome game' sidImg={One} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)}/>
                            <Button backColor = '#4B7BFF' txtColor='white' text='Two Players' sidImg={Two} clicked ={btnClickHandle} />
                        </div>
                        <div className='displayFlex justifyContent'>
                            <Button backColor = '#4B4BFF' txtColor='white' text='Game Online' sidImg={Online} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)}/>
                            <Button backColor = '#6E4BFF' txtColor='white' text='Training Game' sidImg={Training} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)}/>
                        </div>
                    </div>
                </div>
                <div className='bottomSheet'>
                    <p className='text2020'>© 2020</p>
                </div>
            </div>
            {popupshow && <ErrorMsgToast errMsg='Coming Soon'/>}
        </Wrapper>
    )
}

export default Dashboard;
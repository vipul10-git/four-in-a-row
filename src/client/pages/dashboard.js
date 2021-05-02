import React, { useEffect, useState } from 'react';
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

const Dashboard = () => {
    const [popupshow, setIsShown] = useState(false)
    const [highlitePlay, setHighlitePlayBtn] = useState(false);

    let history = useHistory();
    const btnClickHandle = () => {
        history.push('/add-Player')
    }

    useEffect(() => {
        localStorage.clear();
    })

    return (
        <Wrapper pageInfo='Start playing !'>
            <div className='container'>
                <div className='mainPageFrame card-shadow'>
                    <div className='section2'>
                    <div className='content-frame'>
                        <div className='Game-img-section'>
                            <div className='title-section'>
                                <div>
                                    <div className='navyColor font20'>CONNECT FOUR!</div>
                                    <p className='secondaryFontColor font12'>Play with other players <br />around the world.</p>
                                </div>
                                <div className='playButton displayFlex' onMouseLeave={() => setHighlitePlayBtn(false)} onMouseEnter={() => setHighlitePlayBtn(true)}>
                                    <img alt='play' src={Play} className='bR50Per playBtn' />
                                    <div className='mT10 white font12'>PLAY</div>
                                </div>
                            </div>
                            <img alt='game' src={GAMEIMG} className='mainimg' />
                        </div>
                        <div className='LineDesign' />

                    </div>
                    <div className='main-btn-section'>
                        <div className='displayFlex'>
                            <Button backColor='#4BABFF' txtColor='white' text='Custome game' sidImg={One} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)} />
                            <Button backColor={!highlitePlay ? '#4B7BFF' : 'rgb(255, 114, 67)'} txtColor='white' text='Two Players' sidImg={Two} clicked={btnClickHandle} />
                        </div>
                        <div className='displayFlex'>
                            <Button backColor='#4B4BFF' txtColor='white' text='Game Online' sidImg={Online} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)} />
                            <Button backColor='#6E4BFF' txtColor='white' text='Training Game' sidImg={Training} MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='bottomSheet'>
                        <p className='text2020'>© 2020</p>
                    </div>
            </div>
            {popupshow && <ErrorMsgToast errMsg='Coming Soon' />}
        </Wrapper>
    )
}

export default Dashboard;
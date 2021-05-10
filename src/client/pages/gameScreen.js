import React, { useState } from 'react';
import '../../assets/css/app.css';
import { useHistory, useParams } from "react-router-dom";
import Button from '../component/button';
import Card from '../component/card';
import Avatar1 from '../../assets/images/avatar01.png';
import Avatar2 from '../../assets/images/avatar02.png';
import Wrapper from '../component/wrapper';
import SlotDesign from '../component/slotDesign';
import ErrorMsgToast from '../component/errorToast';
import { GameLogic } from '../utils/gameLogic';

const AddPlayer = () => {
    let player1Wins = 0;
    let player2Wins = 0;
    const params = useParams();
    const player1 = params.player1;
    const player2 = params.player2;
    const start = params.start == 0 || params.start == 1 ? +params.start : 0;
    const [playerTurn, setPlayerTurn] = useState(start)
    const playCount = params.rounds;
    const [gameCount, setGameCount] = useState(1);
    const [showWin, setShowWin] = useState(false);
    const [popupshow, setIsShown] = useState(false)
    const [win, setWin] = useState(null);
    let history = useHistory();
    let player1Image = localStorage.getItem('Player 01') || Avatar1
    let player2Image = localStorage.getItem('Player 02') || Avatar2

    const endGame = () => {
        history.push('/')
    }

    const nextGame = (player) => {
        let count = gameCount + 1
        setGameCount(count);

        resetBoard();
        if (player == 0) {
            player1Wins = player1Wins + 1
        } else {
            player2Wins = player2Wins + 1
        }
        if (playCount == gameCount) {
            setTimeout(() => {
                setWin(player1Wins > player2Wins ? 1 : 0)
            }, 500)
        } else {
            setShowWin(true)
            setTimeout(() => setShowWin(false), 1000)
        }
    }
    const resetBoard = () => {
        setTimeout(() => {
            setPlayerTurn(1)
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let id = `col-${i}--row-${j}`
                    document.getElementById(id).setAttribute("data-user", null)
                    document.getElementById(id).querySelector('div').innerHTML = ''
                }
            }
        }, 1000)

    }

    const selecLastEmptySlot = (even) => {
        even.preventDefault()
        let row = even.target.dataset.row;
        for (let i = 7; i >= even.target.dataset.col; i--) {
            let id = `col-${i}--row-${row}`;
            if (document.getElementById(id)) {
                let parent = document.getElementById(id)
                let children = parent.querySelector('div')
                if (children.innerHTML === '') {
                    if (playerTurn === 0) {
                        children.innerHTML = `<img src=${player1Image}  alt='player'  class='playerImgAvatar borderRed'/>`;
                        document.getElementById(id).setAttribute("data-user", playerTurn)
                        if (GameLogic(i, +row, playerTurn)) {
                            nextGame(playerTurn)
                        } else {
                            var sound = document.getElementById("audio");
                            sound.play();
                            setPlayerTurn(1);
                        }
                        return;
                    } else if (playerTurn === 1) {
                        children.innerHTML = `<img src=${player2Image}  alt='player' class='playerImgAvatar borderGreen'/>`;
                        document.getElementById(id).setAttribute("data-user", playerTurn)
                        if (GameLogic(i, +row, playerTurn)) {
                            nextGame(playerTurn)
                        } else {
                            var sound = document.getElementById("audio");
                            sound.play();
                            setPlayerTurn(0);
                        }
                        return;
                    }

                }
            }
        }
        for (let i = even.target.dataset.col; i <= 7; i++) {
            let id = `col-${i}--row-${even.target.dataset.row}`;
            let parent = document.getElementById(id)
            if (parent.childElementCount > 1) {
                parent.removeChild(parent.childNodes[1])
            }
        }

    }
    const onHover = (e) => {
        for (let i = e.target.dataset.col; i <= 7; i++) {
            let id = `col-${i}--row-${e.target.dataset.row}`;
            if (playerTurn === 0 && document.getElementById(id).childElementCount == 1) {
                let parent = document.getElementById(id)
                parent.innerHTML += `<img src=${player1Image} alt='player' style='opacity:0.${i}' class='playerImgAvatarHover borderRed'/>`
            } else if (playerTurn === 1 && document.getElementById(id).childElementCount == 1) {
                let parent = document.getElementById(id)
                parent.innerHTML += `<img src=${player2Image} alt='player' style='opacity:0.${i}' class='playerImgAvatarHover borderGreen'/>`
            }
        }
    }
    const onMouseLeave = (e) => {
        for (let i = e.target.dataset.col; i <= 7; i++) {
            let id = `col-${i}--row-${e.target.dataset.row}`;
            let parent = document.getElementById(id)
            if (parent.childElementCount > 1) {
                parent.removeChild(parent.childNodes[1])
            }
        }
    }

    const handleDragStart = e => {
        e.dataTransfer.setData("dropedTaskData", e.target.dataset.taskdata)
    };

    const handleDrop = (e) => {
        e.preventDefault();
        selecLastEmptySlot(e)
    }
    const handleDropAllowed = (e) => {
        e.preventDefault();
    }


    return (
        <Wrapper pageInfo='let the battle begin!'>
            <div className='container'>
                <div className='game-section'>
                    <div className='game-Detail-section-900'><h3>{playCount} Games Tournament</h3>
                        {showWin && <div className='Orange font18' > WIN!!!!</div>}
                        {win !== null ?
                            <div >
                                <span className='Orange font18'>Congratulation!</span>
                                <div>{win == 1 ? player1 : player2},you won tournament</div>
                            </div>
                            :
                            <h5>Playing Game {gameCount}</h5>
                        }

                    </div>
                    <div className='gameScreenFrame card-shadow'>
                        <div className='userSection game-Detail-section-900'>
                            <Card img={player1Image} draggable={playerTurn == 0 ? true : false} handleDragStart={handleDragStart} underLineBorder={true} imgid='first' backColor='byellow' borderColor='borderRed' secondBorder={playerTurn === 0 ? true : false} disabled={true} text='Player 01' value={player1} />
                            <Card img={player2Image} draggable={playerTurn == 1 ? true : false} handleDragStart={handleDragStart} underLineBorder={true} imgid='second' backColor='bgreen' borderColor='borderGreen' secondBorder={playerTurn === 1 ? true : false} disabled={true} text='Player 02' value={player2} />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(8,1fr)` }} onDropCapture={handleDrop} onDragOverCapture={(e) => handleDropAllowed(e)} onClick={win === null ? selecLastEmptySlot : () => { }}>
                            <SlotDesign onMouseOver={onHover} onMouseLeave={onMouseLeave} />
                        </div>
                    </div>
                    <div className='sideSheet game-Detail-section-450'>
                        <h3>{playCount} Games Tournament</h3>
                        {showWin && <div className='Orange font18' > WIN!!!!</div>}
                        {win !== null ?
                            <div >
                                <span className='Orange font18'>Congratulation!</span>
                                <div>{win == 1 ? player1 : player2},you won tournament</div>
                            </div>
                            :
                            <h5>Playing Game {gameCount}</h5>
                        }
                        <div className='userSection'>
                            <Card img={player1Image} underLineBorder={true} imgid='first' backColor='byellow' borderColor='borderGreen' secondBorder={playerTurn === 0 ? true : false} disabled={true} text='Player 01' value={player1} />
                            <Card img={player2Image} underLineBorder={true} imgid='second' backColor='bgreen' borderColor='borderyellow' secondBorder={playerTurn === 1 ? true : false} disabled={true} text='Player 02' value={player2} />
                        </div>
                        <div className='LineDesign2' />
                        <div className='gameBottomButton'>
                            <Button width='80%' height='50px' backColor='#4a47a3' txtColor='white' text='Undo move' MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)} />
                            <Button width='80%' height='50px' backColor='white' txtColor='red' text='End Tournament' clicked={endGame} />
                        </div>
                    </div>
                    <div className='gameBottomButton game-btn-section-900'>
                        <Button width='80%' height='50px' backColor='#4a47a3' txtColor='white' text='Undo move' MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)} />
                        <Button width='80%' height='50px' backColor='white' txtColor='red' text='End Tournament' clicked={endGame} />
                    </div>
                    {popupshow && <ErrorMsgToast errMsg='Coming Soon' />}
                </div>
            </div>
            <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoPlay={false} ></audio>

        </Wrapper>
    )
}

export default AddPlayer;

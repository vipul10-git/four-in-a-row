import React,{ useState} from 'react';
import '../../assets/css/app.css';
import { useHistory, useParams } from "react-router-dom";
import Button from '../component/button';
import Card from '../component/card';
import Avatar1 from '../../assets/images/avatar01.png';
import Avatar2 from '../../assets/images/avatar02.png';
import Wrapper from '../component/wrapper';
import SlotDesign from '../component/slotDesign';
import ErrorMsgToast from '../component/errorToast';
import {GameLogic} from '../utils/gameLogic';

const AddPlayer = () =>{
    const params = useParams();
    const player1 = params.player1;
    const player2 = params.player2;
    const start = params.start == 0 || params.start == 1 ? +params.start : 0;
    const [playerTurn, setPlayerTurn] = useState(start)
    const playCount = params.rounds;
    const [gameCount,setGameCount] = useState(1);
    const [player1Wins,setPlayer1Wins] = useState(0);
    const [player2Wins,setPlayer2Wins] = useState(0);
    const [showWin,setShowWin] = useState(false);
    const [popupshow, setIsShown] = useState(false)

    const [win , setWin] = useState(null);
    let history = useHistory();

    const endGame = () =>{
        history.push('/')
    }

    const nextGame = (player) =>{
        let count = gameCount+1
        setGameCount(count);
        
        resetBoard();
        if(player == 0){
            let wins= player1Wins+1
            setPlayer1Wins(wins)
        }else{
            let wins= player2Wins+1
            setPlayer2Wins(wins)
        }
        if(playCount === gameCount){
            setWin(player1Wins > player2Wins ? player1 : player2)
        }else{
            setShowWin(true)
            setTimeout(()=>setShowWin(false),1000) 
        }
    }
    const resetBoard = () =>{
        
        setTimeout(()=>{
            setPlayerTurn(1)
            for(let i=0;i<8;i++){
                for(let j=0;j<8;j++){
                    let id = `col-${i}--row-${j}`
                    document.getElementById(id).setAttribute("data-user" ,null)
                    document.getElementById(id).innerHTML = ''
                }
            }
        },1000)
        
    }
    
    const selecLastEmptySlot = (even) =>{
        let row = even.target.dataset.row;
        for(let i=7;i>=even.target.dataset.col;i--){
            let id = `col-${i}--row-${row}`;
            if(document.getElementById(id).innerHTML ===''){
                if(playerTurn === 0){
                    document.getElementById(id).innerHTML = `<img src=${Avatar1} alt='player' height='30px'  className='playerImg'/>`;
                    document.getElementById(id).setAttribute("data-user",playerTurn )  
                    if(GameLogic(i,+row,playerTurn)){
                        nextGame(playerTurn)
                    } else{
                        setPlayerTurn(1);
                    }
                    return;
                }else if(playerTurn === 1){
                    document.getElementById(id).innerHTML = `<img src=${Avatar2} alt='player' height='30px' className='playerImg'/>`;
                    document.getElementById(id).setAttribute("data-user",playerTurn )  
                    if(GameLogic(i,+row,playerTurn)){
                        nextGame(playerTurn)
                    } else{
                        setPlayerTurn(0);
                    }
                    return;
                }  
            }
        }
    }

    return(
        <Wrapper>
            <div className='container'>
                <div className='mainPageFrame alignCenter justifyContent' style={{position:'relative',bottom:'0'}}>
                    <div style={{display:'grid',gridTemplateColumns:`repeat(8,1fr)`}} onClick={win === null ? selecLastEmptySlot: ()=> {}}> 
                <SlotDesign/>
                </div>
                </div>  
                <div className='justifyContent sideSheet alignCenter displayFlex textCenter'>
                    <h3>{playCount} Games Tournament</h3>
                    {showWin && <div className='Orange font18' > WIN!!!!</div>}
                    {win !== null ?
                            <div >
                                <span className='Orange font18'>Congratulation!</span>
                                <div>{ win ===1 ? player2 : player1},you won tournament</div>
                            </div>
                        :
                        <h5>Playing Game {gameCount}</h5>
                    }
                    <Card img={Avatar1} underLineBorder = {true}  backColor='byellow' borderColor='borderGreen' secondBorder={playerTurn === 0 ? true : false} disabled={true} text='Player 01' value={player1}/>
                    <Card img={Avatar2} underLineBorder = {true} backColor='bgreen' borderColor='borderyellow' secondBorder={playerTurn === 1 ? true : false} disabled={true}  text='Player 02' value={player2}/>
                    <div className='LineDesign'/>
                    <Button width='80%' height='50px' backColor = '#4a47a3' txtColor='white' text='Undo move' MouseEnter={() => setIsShown(true)} MouseLeave={() => setIsShown(false)}/>
                    <Button width='80%' height='50px' backColor = 'white' txtColor='red' text='End Tournament' clicked={endGame}/>
                    
                </div>
                {popupshow && <ErrorMsgToast errMsg='Coming Soon'/>}
            </div>  
        </Wrapper>
    )
}

export default AddPlayer;
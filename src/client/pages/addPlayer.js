import React,{ useState} from 'react';
import '../../assets/css/app.css';
import '../../assets/css/popup.css';
import { useHistory } from "react-router-dom";
import Button from '../component/button';
import Card from '../component/card';
import Avatar1 from '../../assets/images/avatar01.png';
import Avatar2 from '../../assets/images/avatar02.png';
import Run from '../../assets/images/run.png';
import Winner from '../../assets/images/winner.png';
import Wrapper from '../component/wrapper';

const AddPlayer = () =>{
    const [player1, setPlayer1] = useState('David')
    const [player2, setPlayer2] = useState('Maria')
    const [showGamePopup, setShowGAmePopup] = useState(false)
    const [showPlayerPopup, setShowPlayerPopup] = useState(false)
    const [starterVal,setStarterVal] = useState('Alternate')
    const [gameStart, setGameStart] = useState(3)
    const [playCount, setplayCount] = useState(5)

    let history = useHistory();
    const addName1 = (event) =>{
        setPlayer1(event.target.value);
    }

    const addName2 = (event) =>{
        setPlayer2(event.target.value);
    }

    const routeToGame = () =>{
        history.push('/start-Game/'+player1+'/'+player2+'/'+playCount+'/'+gameStart)
    }

    const setNumberOfGame = (event) => {
        setplayCount(event.target.value);
    }

    const setOfGame = (e) =>{
        setStarterVal(e.target.value);
        setGameStart(e.target.id)
        setShowPlayerPopup(false)
    }

    return(
        <Wrapper>
            <div className='container'>
                <div className='mainPageFrame alignCenter justifyContent'>
                    <Card img={Avatar1} backColor='byellow' borderColor='borderRed' text='Player 01' onChange={addName1} value={player1}/>
                    <Card img={Avatar2} backColor='bgreen' borderColor='borderyellow' text='Player 02' onChange={addName2} value={player2}/>
                    <Card img={Run} backColor='bblue' borderColor='borderBlue' text='Number of games' onClick={()=>setShowGAmePopup(true)} value={playCount}/>
                    <Card img={Winner} backColor='bblue' borderColor='borderBlue' text='Who Start ' onClick={()=>setShowPlayerPopup(true)} value={starterVal}/>

                    <div className='borderTop' style={{margin:'5px',width:'80%'}}/>
                    <Button width='80%' height='50px' backColor = '#4a47a3' txtColor='white' text='Start Game' clicked={routeToGame}/>
                </div>  
            </div>
            {showGamePopup && 
                <div class="popUp">
                    <div className='hoverDiv'>
                        <h3> Number Of Game</h3>
                        <div onChange={setNumberOfGame}>
                            <div className='popupselection displayFlex'><input type="radio" value="3" name="gender"/> 3 Games</div>
                            <div className='popupselection displayFlex'><input type="radio" value="5" name="gender"/> 5 Games</div>
                            <div className='popupselection displayFlex'><input type="radio" value="10" name="gender"/> 10 Games</div>
                        </div>
                        <div className='borderTop' style={{margin:'10px 35px',width:'80%'}}/>
                        <Button width='30%' height='50px' backColor = 'white' txtColor='#4a47a3' text='CANCEL' clicked={()=>setShowGAmePopup(false)}/>
                        <Button width='45%' height='50px' backColor = '#4a47a3' txtColor='white' text='OK ' clicked={()=>setShowGAmePopup(false)}/>
                    </div>
                </div>
            }   
            {showPlayerPopup && 
                <div class="popUp">
                    <div className='hoverDiv'>
                        <h3> Choose The Player</h3>
                        <div onChange={setOfGame}>
                            <div className='popupselection displayFlex'><input type="radio" value={`${player1}`} id='0' name="gender"/> {player1}</div>
                            <div className='popupselection displayFlex'><input type="radio" value={`${player2}`} id='1' name="gender"/> {player2}</div>
                            <div className='popupselection displayFlex'><input type="radio" value="Alternate" id='2' name="gender"/> Alternate</div>
                        </div>
                        <div className='borderTop' style={{margin:'10px 35px',width:'80%'}}/>
                    </div>
                </div>
            } 
        </Wrapper>
    )
}

export default AddPlayer;
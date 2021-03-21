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
import Popup from '../component/popup';
import RadioBox from '../component/radioBox';
import ErrorMsgToast from '../component/errorToast';


const AddPlayer = () =>{
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')
    const [showGamePopup, setShowGAmePopup] = useState(false)
    const [showPlayerPopup, setShowPlayerPopup] = useState(false)
    const [starterVal,setStarterVal] = useState('Alternate')
    const [gameStart, setGameStart] = useState(3)
    const [playCount, setplayCount] = useState(5)
    const [errorObj, setError] = useState({error:false,erroeText:''})
    let history = useHistory();
    const addName1 = (event) =>{
        setPlayer1(event.target.value);
    }

    const addName2 = (event) =>{
        setPlayer2(event.target.value);
    }

    const routeToGame = () =>{
        if(player1 == ''){
            setError({error:true,erroeText:'Please Add Player1'})
            setTimeout(()=>{
                setError({error:false,erroeText:''})
            },1000)
        }
        if(player2 == ''){
            setError({error:true,erroeText:'Please Add Player2'})
            setTimeout(()=>{
                setError({error:false,erroeText:''})
            },1000)
        }
        if(player2 != '' && player1 != ''){
            history.push('/start-Game/'+player1+'/'+player2+'/'+playCount+'/'+gameStart)
        }
    }

    const setNumberOfGame = (event) => {
        setplayCount(event.target.value);
    }

    const setOfGame = (e) =>{
        setStarterVal(e.target.value);
        setGameStart(e.target.id)
        setShowPlayerPopup(false)
    }
    const {error , erroeText} = errorObj;
    return(
        <Wrapper pageInfo='Add Players'>
            <div className='container'>
                <div className='mainPageFrame alignCenter justifyContent'>
                    <Card img={Avatar1} backColor='byellow' borderColor='borderRed' text='Player 01' onChange={addName1} value={player1}/>
                    <Card img={Avatar2} backColor='bgreen' borderColor='borderyellow' text='Player 02' onChange={addName2} value={player2}/>
                    <Card img={Run} backColor='bblue' borderColor='borderBlue' text='Number of games' disabled={true}  onClick={()=>setShowGAmePopup(true)} value={playCount}/>
                    <Card img={Winner} backColor='bblue' borderColor='borderBlue' text='Who Start ' disabled={true}  onClick={()=>setShowPlayerPopup(true)} value={starterVal}/>
                    <div className='LineDesign'/>
                    <Button width='80%' height='50px' backColor = '#4a47a3' txtColor='white' text='Start Game' clicked={routeToGame}/>
                </div>  
            </div>
            {showGamePopup && 
                <Popup>
                    <h3> Number of game</h3>
                    <div onChange={setNumberOfGame}>
                        <RadioBox value='2 Games' id='2Game'/>
                        <RadioBox value='3 Games' id='3Game'/>
                        <RadioBox value='5 Games' id='5Game'/>
                        <RadioBox value='10 Games' id='10Game'/>
                    </div>
                    <div className='LineDesign'/>
                    <Button width='45%' height='50px' backColor = '#4a47a3' txtColor='white' text='OK ' clicked={()=>setShowGAmePopup(false)}/>
                </Popup>
            }   
            {showPlayerPopup && 
                <Popup>
                    <h3> Choose the player</h3>
                    <div onChange={setOfGame}>
                        <RadioBox value={player1} id='0'/>
                        <RadioBox value={player2} id='1'/>
                        <RadioBox value='Alternate' id='2'/>
                    </div>
                </Popup>
            } 
            {error && <ErrorMsgToast errMsg={erroeText}/>}
        </Wrapper>
    )
}

export default AddPlayer;
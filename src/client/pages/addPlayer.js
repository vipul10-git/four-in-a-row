import React,{ useState} from 'react';
import '../../assets/css/app.css';
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
    const [showPopup, setShowPopup] = useState(false)
    const [playCount, setplayCount] = useState(5)

    let history = useHistory();
    const addName1 = (event) =>{
        setPlayer1(event.target.value);
    }

    const addName2 = (event) =>{
        setPlayer2(event.target.value);
    }

    const routeToGame = () =>{
        history.push('/start-Game/'+player1+'/'+player2+'/'+playCount)
    }

    const setNumberOfGame = (event) => {
        setplayCount(event.target.value);
      }

    return(
        <Wrapper>
            <div style={{height:'75vh',width:'35vw',justifyContent:'center',alignItems:'center',margin:'auto'}}>
                <div className='mainPageFrame alignCenter justifyContent'>
                    <Card img={Avatar1} backColor='byellow' borderColor='borderRed' text='Player 01' onChange={addName1} value={player1}/>
                    <Card img={Avatar2} backColor='bgreen' borderColor='borderyellow' text='Player 02' onChange={addName2} value={player2}/>
                    <Card img={Run} backColor='bblue' borderColor='borderBlue' text='Number of games' onChange={()=>setShowPopup(true)} value={playCount}/>
                    <Card img={Winner} backColor='bblue' borderColor='borderBlue' text='Who Start ' onChange={addName1} value={player1}/>

                    <div className='borderTop' style={{margin:'5px',width:'80%'}}/>
                    <Button width='80%' height='50px' backColor = '#4a47a3' txtColor='white' text='Start Game' clicked={routeToGame}/>
                </div>  
            </div>
            {showPopup && 
                    <div style={{height:'40vh',width:'35vh',backgroundColor:'white',borderRadius:'10px',position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    margin: 'auto',
                    zIndex: '9999'}}>
                        <h3> Number Of Game</h3>
                        <div onChange={setNumberOfGame}>
                            <input type="radio" value="3" name="gender"/> 3
                            <input type="radio" value="5" name="gender"/> 5
                            <input type="radio" value="10" name="gender"/> 10
                        </div>
                        <div className='borderTop' style={{margin:'10px 35px',width:'80%'}}/>
                        <button> CANCEL</button>
                        <button> OK </button>
                    </div>
                }    
        </Wrapper>
    )
}

export default AddPlayer;
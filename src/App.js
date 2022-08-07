import React, {useState} from 'react';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const ItemArray = new Array(9).fill("empty")


const App=()=> {
  const [isCross, setIsCross] = useState(false);
const [winMessage, setWinMessage] = useState("");

const reloadGame=()=>
{
  setIsCross(false);
  setWinMessage("");
  ItemArray.fill("empty",0,9);
}

const checkIsWinner=()=>
{
  if(ItemArray[0]===ItemArray[1] && ItemArray[1]===ItemArray[2] && ItemArray[0]!=="empty")
  {
    setWinMessage(`${ItemArray[0]} won`)
  }
  else if(ItemArray[3]===ItemArray[4] && ItemArray[4]===ItemArray[5] && ItemArray[3]!=="empty")
  {
    setWinMessage(`${ItemArray[3]} won`)
  }
  else if(ItemArray[6]===ItemArray[7] && ItemArray[7]===ItemArray[8] && ItemArray[6]!=="empty")
  {
    setWinMessage(`${ItemArray[6]} won`)
  }
  else if(ItemArray[0]===ItemArray[3] && ItemArray[3]===ItemArray[6] && ItemArray[0]!=="empty")
  {
    setWinMessage(`${ItemArray[0]} won`)
  }
  else if(ItemArray[1]===ItemArray[4] && ItemArray[4]===ItemArray[7] && ItemArray[1]!=="empty")
  {
    setWinMessage(`${ItemArray[1]} won`)
  }
  else if(ItemArray[2]===ItemArray[5] && ItemArray[5]===ItemArray[8] && ItemArray[2]!=="empty")
  {
    setWinMessage(`${ItemArray[2]} won`)
  }
  else if(ItemArray[0]===ItemArray[4] && ItemArray[4]===ItemArray[8] && ItemArray[0]!=="empty")
  {
    setWinMessage(`${ItemArray[0]} won`)
  }
  else if(ItemArray[2]===ItemArray[4] && ItemArray[4]===ItemArray[6] && ItemArray[2]!=="empty")
  {
    setWinMessage(`${ItemArray[2]} won`)
  }
  else if(ItemArray[0]!=="empty" && ItemArray[1]!=="empty" && ItemArray[2]!=="empty" && ItemArray[3]!=="empty" 
  && ItemArray[4]!=="empty" && ItemArray[5]!=="empty" && ItemArray[6]!=="empty" && ItemArray[7]!=="empty"
  && ItemArray[8]!=="empty")
  {
    setWinMessage(`Game Over`)
  }
}

const changeItem=itemNumber=>
{
  if(winMessage)
  {
    return toast(winMessage, {type:"success"});
  }
  if(ItemArray[itemNumber]==="empty")
  {
    ItemArray[itemNumber]=isCross ? "cross" : "circle"
    setIsCross(!isCross);
  }
  else{
    return toast("already filled", {type:"error"});
  }
  checkIsWinner();
}
  return (
    <Container className='p-5'>
      <div className='word'>
        <h1>
          Tic Tac Toe Game
        </h1>
      </div>
      <ToastContainer position='bottom-center'/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage?(
            <div className='mb-2 mt-2'>
              <h1 className='text-warning text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button className='button'
              block
              onClick={reloadGame}
              >Reload the Game</Button>
            </div>
          ):(
            <h1 className='text-center text-warning'>
              {isCross?"Cross":"Circle"} Turns
            </h1>
          )}
          <div className='grid'>
            {ItemArray.map((item,index)=>(
              <Card onClick={()=>{changeItem(index)}}>
                <CardBody className='box'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default App;

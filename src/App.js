import { Game, Score } from './styledApp';
import { useState } from 'react';


function getInitialState() {
  const state = {}

  for (var row = 0; row < 3; row++) {
    for (var column = 0; column < 3; column++) {
      state[`${row}-${column}`] = null;
    }
  }
  return state;
}

function getPositionFromIndex(index) {
  const row = Math.floor(index / 3);
  const column = index % 3;

  return `${row}-${column}`;
}

function getWinner(values) {
  for (var row = 0; row < 3; row++) {
    for (var column = 0; column < 3; column++) {
      const sumRow = values[`${row}-${column}`] + values[`${row}-${column + 1}`] + values[`${row}-${column + 2}`];
      if (sumRow === 3 || sumRow === -3) {
        return sumRow;
      }
      const sumColumn = values[`${row}-${column}`] + values[`${row + 1}-${column}`] + values[`${row + 2}-${column}`];
      if (sumColumn === 3 || sumColumn === -3) {
        return sumColumn;
      }
      const sumDiagonal = values[`${row}-${column}`] + values[`${row + 1}-${column + 1}`] + values[`${row + 2}-${column + 2}`];
      if (sumDiagonal === 3 || sumDiagonal === -3) {
        return sumDiagonal;
      }
      const sumDiagonalReverse = values[`${row}-${column}`] + values[`${row + 1}-${column - 1}`] + values[`${row + 2}-${column - 2}`];
      if (sumDiagonalReverse === 3 || sumDiagonalReverse === -3) {
        return sumDiagonalReverse;
      }
    }
  }
  return null;
}

const App = () => {

  const [values, setValues] = useState(getInitialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [winX,setWinX] = useState(0);
  const [winO,setWinO] = useState(0);

  function handleClick(key) {
    if (winner || values[key]) {
      return;
    }
    const newValue = {
      ...values,
      [key]: player
    }
    setValues(newValue);
    setPlayer(player * -1);
    const newWinner = getWinner(newValue)
    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1);
    }
    if(newWinner === 3){
      setWinX( winX +1)
    }
    if(newWinner === -3){
      setWinO(winO +1);
    }
  }
  function getLabel(values) {
    if (!values) {
      return null;
    }
    return values > 0 ? 'X' : 'O';
  }

  function reset() {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
  }
  function resetScore(){
    setWinO(0);
    setWinX(0);
  }

  const ATie = Object.values(values).filter(Boolean).length === 9 && !winner;

  return (
    <>
      <Score>
        <div className="header">
          <h1>Score</h1>
        </div>
        <div className="team">
          <div className="x">
            <h1>x: {winX} </h1>
          </div>
          <div className="o">
            <h1>o: {winO} </h1>
          </div>
        </div>
      </Score>
      <Game>
        <div className="body">
          {Array.from({ length: 9 }).map((_, index) => (
            <button key={index} type="button" onClick={() => handleClick(getPositionFromIndex(index))}>{getLabel(values[getPositionFromIndex(index)])}</button>
          ))}
        </div>
        <div className="message">
          {winner &&
            <p>O ganhador é {winner > 0 ? 'X' : 'O'}</p>
          }
          {ATie &&
            <p>Houve um empate</p>
          }
        </div>
        <div className="btn">
          <button onClick={() => reset()}>Restart</button>
          <button onClick={()=> resetScore()}>Restart score</button>
        </div>
      </Game>
    </>
  );
}

export default App;

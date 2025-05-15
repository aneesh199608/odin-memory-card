import { useState, useEffect } from 'react'
import './App.css'
import 'nes.css/css/nes.min.css';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    getPokemonData(TOTAL_CARDS).then(data => setCards(shuffleArray(data)));
  }, []);

  const handleCardClick = (id) => {
    if (clickedCard.includes(id)) {
      setGameOver(true);
      setWin(false);
      setClickedCard([]);
      setScore(0);
    }
    else {
      const newScore = score + 1;
      const newClicked = [...clickedCard, id];
      setClickedCard(newClicked);
      setScore(newScore);
      setBestScore(prev => Math.max(prev, newScore));

      if(newScore === TOTAL_CARDS) {
        setGameOver(true);
        setWin(true);
      } else {
        setCards(shuffleArray(cards));
      }
    }
  };

  return (
    <>
    <div className="App nes-container with-title is-centered mt-4">
      <p className="title">Memory Card Game</p>
      <Scoreboard score={score} bestScore={bestScore} />
      {/* <CardGrid cards={cards} onCardClick={handleCardClick} /> */}
      {/* {gameOver && <GameOverModal win={win} onClose={resetGame} />} */}
    </div>
    </>
  )
}

export default App

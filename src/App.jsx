import { useState, useEffect } from 'react';
import Board from './components/Board';
import PlayerSetup from './components/PlayerSetup';
import Modal from './components/Modal';

function App() {
  const [players, setPlayers] = useState({ X: '', O: '' });
  const [gameStarted, setGameStarted] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const handleStartGame = (p1, p2) => {
    setPlayers({ X: p1, O: p2 });
    setGameStarted(true);
  };

  const handlePlay = (i) => {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  useEffect(() => {
    const result = calculateWinner(squares);
    if (result) {
      setWinner(players[result.winner]);
      setWinningLine(result.line);
    } else if (!squares.includes(null)) {
      setWinner('Draw');
    }
  }, [squares, players]);

  return (
    <div className="game-container">
      {!gameStarted ? (
        <PlayerSetup onStartGame={handleStartGame} />
      ) : (
        <>
          <div className="status">
            {winner
              ? (winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`)
              : `Current Turn: ${xIsNext ? players.X : players.O} (${xIsNext ? 'X' : 'O'})`
            }
          </div>
          <Board
            squares={squares}
            onPlay={handlePlay}
            winningLine={winningLine}
          />
          {winner && (
            <Modal winner={winner} onReset={handleReset} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

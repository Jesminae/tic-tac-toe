import Square from './Square';

export default function Board({ squares, onPlay, winningLine }) {

    return (
        <div className="board">
            {squares.map((square, i) => (
                <Square
                    key={i}
                    value={square}
                    onSquareClick={() => onPlay(i)}
                    isWinning={winningLine && winningLine.includes(i)}
                />
            ))}
        </div>
    );
}

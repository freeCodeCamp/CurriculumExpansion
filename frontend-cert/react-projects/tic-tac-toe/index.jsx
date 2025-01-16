export const Square = ({ value, onClick }) => {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  };
  
  export const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  
  export const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = React.useState(true);
    const winner = calculateWinner(squares);
    const isDraw = squares.every(square => square !== null) && !winner;
  
    const handleClick = (index) => {
      if (squares[index] || winner || isDraw) return;
      const nextSquares = squares.slice();
      nextSquares[index] = isXNext ? 'X' : 'O';
      setSquares(nextSquares);
      setIsXNext(!isXNext);
    };
  
    const resetGame = () => {
      setSquares(Array(9).fill(null));
      setIsXNext(true);
    };
  
    const renderSquare = (index) => {
      return <Square value={squares[index]} onClick={() => handleClick(index)} />;
    };
  
    return (
      <div className="board">
        <h1>Tic-Tac-Toe</h1>
        <div className="status">
          {winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Player: ${isXNext ? 'X' : 'O'}`}
        </div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
    );
  };
  
  export const App = () => {
    return (
      <div className="App">
        <Board />
      </div>
    );
  };
  
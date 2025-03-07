import { useEffect, useState } from "react";
import "./App.css";

const Square = ({
  value,
  onClick,
  isWinning,
}: {
  value: string | null;
  onClick: () => void;
  isWinning: boolean;
}) => {
  return (
    <button
      className={`
        w-20 h-20 text-4xl font-bold border border-gray-400
        transition-colors duration-300 focus:outline-none
        ${
          isWinning
            ? "bg-green-200 text-green-800"
            : "bg-white hover:bg-gray-100"
        }
        ${value === "X" ? "text-blue-600" : value === "O" ? "text-red-600" : ""}
      `}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

const Board = ({
  winningLine,
  squares,
  handleClick,
}: {
  winningLine: number[] | null;
  squares: (string | null)[];
  handleClick: (i: number) => void;
}) => {
  const renderSquare = (i: number) => {
    const isWinning = winningLine ? winningLine.includes(i) : false;

    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        isWinning={isWinning}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-1 mb-6">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => renderSquare(i))}
    </div>
  );
};

const Scoreboard = ({ scores }: { scores: { X: number; O: number } }) => {
  return (
    <div className="flex justify-between w-full max-w-xs mx-auto mb-6 p-4 bg-gray-100 rounded-lg shadow">
      <div className="text-center">
        <span className="text-blue-600 font-bold text-xl">X</span>
        <p className="text-2xl font-bold">{scores.X}</p>
      </div>
      <div className="text-center">
        <span className="text-gray-600 font-bold">Draw</span>
        <p className="text-2xl font-bold">{9 - (scores.X + scores.O)}</p>
      </div>
      <div className="text-center">
        <span className="text-red-600 font-bold text-xl">O</span>
        <p className="text-2xl font-bold">{scores.O}</p>
      </div>
    </div>
  );
};

function App() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scores, setScores] = useState<{ X: number; O: number }>({
    X: 0,
    O: 0,
  });
  const [playAgainstAI, setPlayAgainstAI] = useState<boolean>(false);

  useEffect(() => {
    const result = calculateWinner(squares);
    if (result) {
      const { winner, line } = result;
      setWinner(winner);
      setWinningLine(line);

      if (winner && !winningLine) {
        setScores((prevScores) => ({
          ...prevScores,
          [winner]: prevScores[winner as keyof typeof prevScores] + 1,
        }));
      }
    } else if (!squares.includes(null)) setWinner("Draw");
  }, [squares]);

  useEffect(() => {
    if (playAgainstAI && !xIsNext && !winner) {
      const timer = setTimeout(() => {
        makeAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [xIsNext, winner, playAgainstAI]);

  const handleClick = (i: number) => {
    if (winner || squares[i] || (!xIsNext && playAgainstAI)) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const makeAIMove = () => {
    const emptySquares = squares
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null) as number[];

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const aiMove = emptySquares[randomIndex];

      const newSquares = squares.slice();
      newSquares[aiMove] = "O";
      setSquares(newSquares);
      setXIsNext(true);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  const toggleAIMode = () => {
    setPlayAgainstAI((prev) => !prev);
    resetGame();
  };

  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  }

  const getStatus = () => {
    if (winner === "Draw") return "Game ended in a draw!";
    if (winner) return `Winner: ${winner}`;
    return `Next player: ${xIsNext ? "X" : "O"}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Tic-Tac-Toe</h1>

      <Scoreboard scores={scores} />

      <div className="mb-4 text-xl font-medium text-gray-700">
        {getStatus()}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <Board
          handleClick={handleClick}
          squares={squares}
          winningLine={winningLine}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Reset Game
        </button>

        <button
          onClick={toggleAIMode}
          className={`
            px-6 py-2 rounded-md transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50
            ${
              playAgainstAI
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
                : "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500"
            }
          `}
        >
          {playAgainstAI ? "Play with Friend" : "Play against AI"}
        </button>
      </div>
    </div>
  );
}

export default App;

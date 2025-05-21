import './Scoreboard.css';

function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard">
            <div className="flex">
                <p className="score">Current: {score}</p>
                <p className="best">Best: {bestScore}</p>
            </div>
        </div>
    );
}

export default Scoreboard;
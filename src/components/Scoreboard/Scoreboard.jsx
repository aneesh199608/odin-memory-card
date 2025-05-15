import './Scoreboard.css';

function Scoreboard({ score, bestScore }) {
    return (
        <div className="scoreboard nes-container is-dark with-title mb-4">
            <p className="title">Score</p>
            <div className="flex">
                <p className="mr-4">Current: <span className="nes-text is-primary">{score}</span></p>
                <p>Best: <span className="nes-text is-success">{bestScore}</span></p>
            </div>
        </div>
    );
}

export default Scoreboard;
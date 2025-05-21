import { useEffect } from 'react';
import './GameOverModal.css';

function GameOverModal({ win, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="nes-container is-rounded with-title modal-overlay">
        <p className="title">Game Over</p>
        <p className={`nes-text ${win ? 'is-success' : 'is-error'}`}>
          {win ? '🎉 Congrats, you win!' : 'Oops! Try again!'}
        </p>
      </div>
    </div>
  );
}

export default GameOverModal;

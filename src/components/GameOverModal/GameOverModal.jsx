import { useEffect } from 'react';

function GameOverModal({ win, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <dialog className="nes-dialog is-open" style={{ pointerEvents: 'none' }}>
      <p className={`nes-text ${win ? 'is-success' : 'is-error'}`}>
        {win ? '🎉 Congrats, you win!' : '💥 Oops! Try again!'}
      </p>
    </dialog>
  );
}

export default GameOverModal;

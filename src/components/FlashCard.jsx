import { useState } from 'react';
import './FlashCard.css';

function FlashCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`} 
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="card-label">Question</div>
            <div className="card-content">{card.question}</div>
            <div className="flip-hint">Click to flip</div>
          </div>
          <div className="flashcard-back">
            <div className="card-label">Answer</div>
            <div className="card-content">{card.answer}</div>
            <div className="flip-hint">Click to flip back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
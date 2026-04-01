import { useState } from 'react';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import { flashcards } from './data/flashcards';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>JavaScript Flash Cards</h1>
        <p>Test your JavaScript knowledge</p>
      </header>
      
      <main className="main">
        <ProgressBar 
          current={currentIndex + 1} 
          total={flashcards.length} 
        />
        
        <FlashCard card={flashcards[currentIndex]} />
        
        <Navigation 
          currentIndex={currentIndex + 1}
          total={flashcards.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onReset={handleReset}
        />
      </main>
      
      <footer className="footer">
        <p>Click on a card to flip it and reveal the answer</p>
      </footer>
    </div>
  );
}

export default App;
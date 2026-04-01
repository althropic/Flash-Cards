import './Navigation.css';

function Navigation({ 
  currentIndex, 
  total, 
  onPrevious, 
  onNext, 
  onReset 
}) {
  const isFirst = currentIndex === 1;
  const isLast = currentIndex === total;

  return (
    <div className="navigation">
      <button 
        className="nav-btn secondary"
        onClick={onReset}
      >
        Reset
      </button>
      <div className="nav-arrows">
        <button 
          className="nav-btn arrow"
          onClick={onPrevious}
          disabled={isFirst}
        >
          ← Previous
        </button>
        <button 
          className="nav-btn arrow"
          onClick={onNext}
          disabled={isLast}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Navigation;
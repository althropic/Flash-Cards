import './ProgressBar.css';

function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">Card {current} of {total}</span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
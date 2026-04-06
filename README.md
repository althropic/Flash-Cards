# Flash Cards

A JavaScript flash card application built with React to help users test their JavaScript knowledge.

## Overview

This project is a flash card app with pre-defined JavaScript questions and answers. Users can flip through cards to test their knowledge, track their progress with a visual progress bar, and navigate between cards using simple navigation controls.

**Features:**
- 10 pre-defined JavaScript flashcards with questions and answers
- Progress bar showing current position (e.g., "Card 3 of 10" with percentage)
- Click-to-flip functionality to reveal answers
- Previous/Next navigation with disabled states at boundaries
- Reset button to return to the first card
- Smooth 3D flip animation for cards
- Responsive design

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Vitest** - Testing framework
- **Testing Library** - React testing utilities

## Project Structure

```
flash-cards/
├── src/
│   ├── components/
│   │   ├── FlashCard.jsx      # Card component with flip animation
│   │   ├── FlashCard.css
│   │   ├── ProgressBar.jsx    # Progress indicator component
│   │   ├── ProgressBar.css
│   │   ├── Navigation.jsx     # Nav controls component
│   │   └── Navigation.css
│   ├── data/
│   │   └── flashcards.js      # JavaScript Q&A data
│   ├── App.jsx                # Main app with state management
│   ├── App.css                # Global styles
│   └── main.jsx               # React entry point
├── tests/
│   ├── setup.js               # Test configuration
│   ├── FlashCard.test.jsx     # FlashCard component tests
│   ├── ProgressBar.test.jsx   # ProgressBar component tests
│   ├── Navigation.test.jsx    # Navigation component tests
│   └── App.test.jsx           # Integration tests
├── index.html                 # HTML entry point
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Usage

1. Open the app in your browser (default: http://localhost:5173)
2. Read the question on each flashcard
3. Click the card to flip it and reveal the answer
4. Use Previous/Next buttons to navigate between cards
5. Watch your progress in the progress bar at the top
6. Click Reset to start over from the first card

## Testing

The project includes comprehensive tests for all components:

- **FlashCard tests**: Renders questions, flip functionality
- **ProgressBar tests**: Progress calculation, display accuracy
- **Navigation tests**: Button states, callback invocations
- **App tests**: Integration, component rendering

Run tests with:
```bash
npm run test
```

## License

This project is for educational purposes as part of the roadmap.sh projects.

## Acknowledgments

[roadmap.sh](https://roadmap.sh/projects/flash-cards) for the project specification.
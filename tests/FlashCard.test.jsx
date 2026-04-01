import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FlashCard from '../src/components/FlashCard'

const testCard = {
  id: 1,
  question: 'Test Question',
  answer: 'Test Answer'
}

describe('FlashCard', () => {
  it('renders the question on the front', () => {
    render(<FlashCard card={testCard} />)
    expect(screen.getByText('Test Question')).toBeInTheDocument()
  })

  it('shows question label by default', () => {
    render(<FlashCard card={testCard} />)
    expect(screen.getByText('Question')).toBeInTheDocument()
  })

  it('flips to show answer when clicked', () => {
    render(<FlashCard card={testCard} />)
    
    const card = screen.getByText('Test Question').closest('.flashcard')
    expect(card).not.toHaveClass('flipped')
    
    fireEvent.click(card)
    expect(card).toHaveClass('flipped')
  })

  it('flips back when clicked again', () => {
    render(<FlashCard card={testCard} />)
    
    const card = screen.getByText('Test Question').closest('.flashcard')
    fireEvent.click(card)
    expect(card).toHaveClass('flipped')
    
    fireEvent.click(card)
    expect(card).not.toHaveClass('flipped')
  })
})
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App', () => {
  it('renders the title', () => {
    render(<App />)
    expect(screen.getByText('JavaScript Flash Cards')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<App />)
    expect(screen.getByText('Test your JavaScript knowledge')).toBeInTheDocument()
  })

  it('renders progress bar with first card', () => {
    render(<App />)
    expect(screen.getByText('Card 1 of 10')).toBeInTheDocument()
    expect(screen.getByText('10%')).toBeInTheDocument()
  })

  it('renders navigation buttons', () => {
    render(<App />)
    expect(screen.getByText('← Previous')).toBeInTheDocument()
    expect(screen.getByText('Next →')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })

  it('renders first flashcard question', () => {
    render(<App />)
    expect(screen.getByText(/What is the difference between let, const, and var/i)).toBeInTheDocument()
  })
})
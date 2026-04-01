import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Navigation from '../src/components/Navigation'

describe('Navigation', () => {
  it('disables previous button on first card', () => {
    const handlers = {
      onPrevious: vi.fn(),
      onNext: vi.fn(),
      onReset: vi.fn()
    }
    
    render(
      <Navigation 
        currentIndex={1} 
        total={10} 
        onPrevious={handlers.onPrevious}
        onNext={handlers.onNext}
        onReset={handlers.onReset}
      />
    )
    
    const prevBtn = screen.getByText('← Previous')
    expect(prevBtn).toBeDisabled()
  })

  it('disables next button on last card', () => {
    const handlers = {
      onPrevious: vi.fn(),
      onNext: vi.fn(),
      onReset: vi.fn()
    }
    
    render(
      <Navigation 
        currentIndex={10} 
        total={10} 
        onPrevious={handlers.onPrevious}
        onNext={handlers.onNext}
        onReset={handlers.onReset}
      />
    )
    
    const nextBtn = screen.getByText('Next →')
    expect(nextBtn).toBeDisabled()
  })

  it('enables both buttons in the middle', () => {
    const handlers = {
      onPrevious: vi.fn(),
      onNext: vi.fn(),
      onReset: vi.fn()
    }
    
    render(
      <Navigation 
        currentIndex={5} 
        total={10} 
        onPrevious={handlers.onPrevious}
        onNext={handlers.onNext}
        onReset={handlers.onReset}
      />
    )
    
    expect(screen.getByText('← Previous')).not.toBeDisabled()
    expect(screen.getByText('Next →')).not.toBeDisabled()
  })

  it('calls onPrevious when previous button clicked', () => {
    const onPrevious = vi.fn()
    
    render(
      <Navigation 
        currentIndex={5} 
        total={10} 
        onPrevious={onPrevious}
        onNext={vi.fn()}
        onReset={vi.fn()}
      />
    )
    
    fireEvent.click(screen.getByText('← Previous'))
    expect(onPrevious).toHaveBeenCalledTimes(1)
  })

  it('calls onNext when next button clicked', () => {
    const onNext = vi.fn()
    
    render(
      <Navigation 
        currentIndex={5} 
        total={10} 
        onPrevious={vi.fn()}
        onNext={onNext}
        onReset={vi.fn()}
      />
    )
    
    fireEvent.click(screen.getByText('Next →'))
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onReset when reset button clicked', () => {
    const onReset = vi.fn()
    
    render(
      <Navigation 
        currentIndex={5} 
        total={10} 
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onReset={onReset}
      />
    )
    
    fireEvent.click(screen.getByText('Reset'))
    expect(onReset).toHaveBeenCalledTimes(1)
  })
})
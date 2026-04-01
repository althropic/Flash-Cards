import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProgressBar from '../src/components/ProgressBar'

describe('ProgressBar', () => {
  it('renders current and total count', () => {
    render(<ProgressBar current={3} total={10} />)
    expect(screen.getByText('Card 3 of 10')).toBeInTheDocument()
  })

  it('calculates percentage correctly', () => {
    render(<ProgressBar current={5} total={10} />)
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('shows 100% on last card', () => {
    render(<ProgressBar current={10} total={10} />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('shows 10% on first card of 10', () => {
    render(<ProgressBar current={1} total={10} />)
    expect(screen.getByText('10%')).toBeInTheDocument()
  })
})
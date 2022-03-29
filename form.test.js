import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Index from './pages/index'
import Form from './components/Form'

describe('Index page', () => {
  it('should render', () => {
    render(<Form />)
  })
})

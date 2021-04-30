import { render } from '@testing-library/react'

import Contact from './Contact'

describe('Contact', () => {
  it('match snapshot', () => {
    const { container } = render(<Contact />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

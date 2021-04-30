import { render } from '@testing-library/react'

import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('match snapshot', () => {
    const { container } = render(<Newsletter />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'

import Partners from './Partners'

describe('Partners', () => {
  it('match snapshot', () => {
    const { container } = render(<Partners />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

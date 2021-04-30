import { render } from '@testing-library/react'

import Banner from './Banner'

describe('Banner', () => {
  it('match snapshot', () => {
    const { container } = render(<Banner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'

import AboutUs from './AboutUs'

describe('AboutUs', () => {
  it('should render AboutUs', () => {
    const { container } = render(<AboutUs />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

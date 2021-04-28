import { render } from '@testing-library/react'

import Contact from './Contact'

describe('<Contact />', () => {
  it('should render component that wraps Contact on page', () => {
    const { container } = render(<Contact />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

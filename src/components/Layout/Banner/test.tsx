import { render } from '@testing-library/react'

import Banner from './Banner'

describe('<Banner />', () => {
  it('should render component that wraps banner on page', () => {
    const { container } = render(<Banner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

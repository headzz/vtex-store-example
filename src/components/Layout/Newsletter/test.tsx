import { render } from '@testing-library/react'

import Newsletter from './Newsletter'

describe('<Newsletter />', () => {
  it('should render component that wraps newsletter on page', () => {
    const { container } = render(<Newsletter />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

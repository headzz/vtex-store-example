import { render } from '@testing-library/react'

import Partner from './Partner'

describe('<Partner />', () => {
  it('should render component that wraps partners section on page', () => {
    const { container } = render(<Partner />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

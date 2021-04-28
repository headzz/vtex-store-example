import { render } from '@testing-library/react'

import WhoWeAre from './WhoWeAre'

describe('<WhoWeAre />', () => {
  it('should render component that wraps WhoWeAre on page', () => {
    const { container } = render(<WhoWeAre />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

import Layout from 'components/Layout'
import AboutUs from 'modules/AboutUs'
import Banner from 'modules/Banner'
import Contact from 'modules/Contact'
import Footer from 'modules/Footer'
import Header from 'modules/Header'
import Newsletter from 'modules/Newsletter'
import Partners from 'modules/Partners'
import Solution from 'modules/Solution'

/**
 * @component
 * @name Homepage
 * @description creates Homepage component section to use on screen.
 * @namespace components modules/Homepage
 *
 */
const Homepage: React.FC = () => (
  <Layout.Wrapper>
    <Header />
    <Banner />
    <Partners />
    <Solution />
    <AboutUs />
    <Contact />
    <Newsletter />
    <Footer />
  </Layout.Wrapper>
)

export default Homepage

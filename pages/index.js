import Layout from '../Layouts/layout'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Research from '../components/Research'

export default () =>
  <Layout title='Little Universe - Home'>
    <div>
      <Nav />

      <Projects />
      <Research />
    </div>
  </Layout>

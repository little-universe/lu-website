import Layout from '../Layouts/layout'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'

export default () =>
  <Layout title='Little Universe - Home'>
    <div>
      <Nav />

      <Hero
        headline="Little Universe is a digital design agency and research office."
      />
    </div>
  </Layout>

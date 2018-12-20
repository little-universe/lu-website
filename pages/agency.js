import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'

export default () =>
  <Layout title='Little Universe - Agency'>
    <div>
      <Nav />

      <Hero
        headline="Little Universe is a digital product design agency and research studio."
      />
    </div>

    <Grid container className="container">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <p>We do this and that and that and this and so on.</p>
      </Grid>
    </Grid>

  </Layout>

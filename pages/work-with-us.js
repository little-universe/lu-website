import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'

export default () =>
  <Layout title='Little Universe - Work With Us' className="workWithUs-page">
    <LeadForm />
    <Footer />
  </ Layout>

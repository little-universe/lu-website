import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'

export default () =>
  <Layout title='Little Universe - Research' className="research-page" render={(onExit) => (
    <>
    <Nav onExit={onExit} />

    <LeadForm />

  <Footer />
  </>
  )
}/>

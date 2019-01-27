import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import LuHqMap from '../components/LuHqMap'

export default () =>
  <Layout title='Little Universe - Work With Us' className="workWithUs-page">
    <div className="container">
      <Grid container>
        <Grid item md={6} xs={12} style={{ height: 500, width: "100%"}}>
          <LuHqMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBmW_YvGkgxxJCikV8U41NvnCyFXESb5g8"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Grid>
        <Grid item md={6}>
        </Grid>
      </Grid>
    </div>

    <LeadForm />
    <Footer />
  </ Layout>

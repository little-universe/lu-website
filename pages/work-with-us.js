import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import LuHqMap from '../components/LuHqMap'

export default () =>
  <>
    <Layout title='Little Universe - Work With Us' className="workWithUs-page">
    <div className="home-hero-bg agency">
      <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
      <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
    <Hero
      className="hero-workWith"
      headline={<>Work With Us</>}
      subhead={["Drop us a line or give us a call. We're always excited to talk concept or talk shop."]}
    />
    </div>
        <Grid container className="container visitUs"  spacing={40} alignItems="center">
          <Grid item md={6} xs={12}>
            <div className="visitItem visitUsContact">
              <h3>Drop us a line.</h3>
              <p>agency@littleuniverse.com</p>
            </div>
            <div className="visitItem visitUsAddress">
              <h3>Come Visit.</h3>
              <p>260 Ainslie Street, 3rd Floor <br/>Brooklyn, NY 11211</p>
            </div>
          </Grid>
          <Grid item md={6} xs={12} style={{ height: 500, width: "100%"}}>
            <LuHqMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBmW_YvGkgxxJCikV8U41NvnCyFXESb5g8"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
        </Grid>
      <Footer />
    </ Layout>
  </>

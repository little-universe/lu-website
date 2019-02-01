import Layout from '../Layouts/layout'
import Grid from '@material-ui/core/Grid'
import Nav from '../components/Nav'
import Hero from '../components/ui/Hero'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import LuHqMap from '../components/LuHqMap'
import Fade from 'react-reveal/Fade'

export default () =>
  <>
    <Layout title='Little Universe - Work With Us' className="workWithUs-page">
      <div className="home-hero-bg agency">
        <img className="yellow-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/yellow.svg" />
        <img className="green-bubble bubble" src="https://s3.us-east-2.amazonaws.com/lu-assets/green.svg" />
      <Hero
        className="hero-workWith"
        headline={<>Work With Us</>}
        subhead="We're always interested in hearing great ideas that we can collaborate on."
      />
      </div>
      <Fade bottom distance="20px" duration={700}>
      <div className="visitUs">
        <div className="container">
          <Grid container className=""  spacing={40} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className="visitItem visitUsContact">
                <h3>Drop us a line.</h3>
                <p>adrian@littleuniverse.com</p>
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
        </div>
      </div>
      </Fade>

      <Footer />
    </ Layout>
  </>

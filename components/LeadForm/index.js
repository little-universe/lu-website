import "./styles.scss"
import Grid from '@material-ui/core/Grid'

class LeadForm extends React.Component {

  render() {
    return (
      <div className="container" className="leadFormContainer">
        <Grid container>
          <Grid item xs={8} md={3} />
          <Grid item xs={6} md={6}>
            <Grid container direction="column">
              <h1>Let's build something together.</h1>
              <p className="secondary form-instructions-text">Fill in the form, or, if you prefer, <a>send us an email</a></p>

              <input autocomplete="new-password" type="text" placeholder="Your name" />

              <input autocomplete="new-password" type="text" placeholder="Your organization" />

              <input autocomplete="new-password" type="text" placeholder="Your email" />

              <input autocomplete="new-password" type="text" placeholder="Tell us about your project" />

              <button>Submit</button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default LeadForm

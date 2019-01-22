import "./styles.scss"
import Grid from '@material-ui/core/Grid'

class Demo extends React.Component {
  state = {
    buttonDemo: "button1"
  }

  render() {
    let { list, button } = this.props;

    return (
      <Grid className="container demo-container" container>

        { list &&
          <Grid container justify="center" className="demo demo-list">
            <div className="list-container">
              <div className="list-item">
                This is a list item
              </div>
              <div className="list-item">
                This is a list item
              </div>
              <div className="list-item">
                This is a list item
              </div>
              <div className="list-item">
                This is a list item
              </div>
              <div className="list-item">
                This is a list item
              </div>
            </div>
          </Grid>
        }

        {
          button &&
          <Grid container justify="center" className="demo demo-button-wrapper">
            <Grid className="toggles" container spacing={24} justify="center">
              <Grid item onClick={() => this.setState({ buttonDemo: "button1" })}>
                <span className={this.state.buttonDemo == "button1" ? "toggle active" : "toggle"} />
              </Grid>
              <Grid item onClick={() => this.setState({ buttonDemo: "button2" })}>
                <span className={this.state.buttonDemo == "button2" ? "toggle active" : "toggle"} />
              </Grid>
              <Grid item onClick={() => this.setState({ buttonDemo: "button3" })}>
                <span className={this.state.buttonDemo == "button3" ? "toggle active" : "toggle"} />
              </Grid>
            </Grid>

            <Grid container justify="center" className="buttons-container">
              <button
                className={ this.state.buttonDemo == "button1" ? "demo-button button1"
                          : this.state.buttonDemo == "button2" ? "demo-button button2"
                          : this.state.buttonDemo == "button3" ? "demo-button button3" : null
                          }
              >Click me</button>
            </Grid>
          </Grid>
        }

      </Grid>
    )
  }
}

export default Demo

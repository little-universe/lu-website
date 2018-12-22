import "./styles.scss"
import Router from 'next/router'
import Grid from '@material-ui/core/Grid'
import { Icon } from 'react-icons-kit'

export default ({
  variant = "full",
  url,
  researchTitle,
  researchSubtitle,
  researchBlurb,
}) =>
  <div className={ variant === "preview" ? "research preview" : "research" }>
    <Grid item xs={8}>
    { variant ==="preview" ?
      <Grid item>
          <h1 className="research-title">{researchTitle}</h1>
      </Grid>
      :
      <h1>{researchTitle}</h1>
    }
    </Grid>

  </div>

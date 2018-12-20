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
      <Grid item xs={6}>
        <p>We are concerned not only with the way Digital Products look, function, or produce value, but with the way they are built, maintained, and scaled.</p>

        <p>We are a team of obsessive, critical, and evolutionary makers interested in the way our contemporary Digital context will evolve and continue to influence our lives beyond the screen.</p>

        <p>We work diligently and systematically to design, build, scale, and maintain products, websites, and libraries for our clients which support their missions and targets. Through our operation as an agency we are granted an objective view into the problems of our clients allowing for unbiased decision making and focused product thinking.</p>

        <p>We not only implement code, design interfaces, and structure product development, but build unique processes tailored to our client’s need and digital goals.</p>

        <p>Though we think intensely about the way in which Digital Products have come to influence the cultural, social, and political environments of our time, we find ourselves returning to questions which concern their own language and way of addressing reality. </p>

        <p>Each product, service, or website designed and built for a Digital context involves an exercise in collection. The mainstream internet is built as a result of a robust structure of reference and documentation. Documentation which describes the application and implementation of contextually valuable snippets, kits, or libraries.</p>

        <p>This excites us, as it introduces a unique opportunity to question the languages and vocabularies which building Digital Products involve. The designer, engineer, or technological worker expresses a sensibility and attitude in Digital design not through master-plans or full-scope design and development exercises, but through the way in which they decide to integrate, refresh, and re-incarnate fragments of the existing web into a unique and evolving context.</p>

        <p>We think about the part as well as the whole, the detail within the harmonious outcome, each as its own Little Universe.</p>
      </Grid>
    </Grid>

  </Layout>

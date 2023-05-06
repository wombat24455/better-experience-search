import { Fragment } from 'preact';

export function About() {
  return (
    <Fragment>
      <AboutContent />
    </Fragment>
  )
}

function AboutContent() {
  return (
    <main>
      <h1>About</h1>
      <p>Better Experience Search is a project</p>
    </main>
  )
}

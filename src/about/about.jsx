import { render } from 'preact'
import { Fragment } from 'preact';

import '../index.css'

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
      <p>This project aims to be a better alternative to the dumpsterfire we all call Roblox's Experience Search</p>
    </main>
  )
}

render(<About />, document.getElementById('app'))

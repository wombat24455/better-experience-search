import { render } from 'preact'
import { Fragment } from 'preact';

import { Navbar } from '../fragments/components/navbar';
import { Footer } from '../fragments/components/footer';

import '../app.css'
import '../index.css'

export function All() {
  return (
    <Fragment>
      <Navbar />
      <AllContent />
      <Footer />
    </Fragment>
  )
}

function AllContent() {
  return (
    <main>
      <h1>All Experiences</h1>
      <p>searchbar goes here</p>
      <p>experiences go here</p>
    </main>
  )
}

render(<All />, document.getElementById('app'))

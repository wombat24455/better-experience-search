import { render } from 'preact'
import { Fragment } from 'preact';

import { Navbar } from '../fragments/components/navbar';
import { Footer } from '../fragments/components/footer';

import '../app.css'
import '../index.css'

export function Discover() {
  return (
    <Fragment>
      <Navbar />
      <DiscoverContent />
      <Footer />
    </Fragment>
  )
}
  
function DiscoverContent() {
  return (
    <main>
      <h1>Discover Experiences</h1>
      <p>searchbar goes here</p>
      <p>experiences go here</p>
    </main>
  )
}

render(<Discover />, document.getElementById('app'))

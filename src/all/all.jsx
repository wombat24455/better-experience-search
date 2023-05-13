import { render } from 'preact'
import { Fragment } from 'preact';

export function All() {
  return (
    <Fragment>
      <AllContent />
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

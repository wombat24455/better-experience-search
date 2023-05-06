import { Fragment } from 'preact';

export function Navbar() {
    return (
        <Fragment>
            <NavbarContent />
        </Fragment>
    )
}

function NavbarContent() {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="../discover">Discover</a></li>
                <li><a href="../all">All Experiences</a></li>
                <li><a href="../about">About</a></li>
            </ul>
      </div>
    )
  }
  
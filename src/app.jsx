import { Footer } from './fragments/components/footer'
import { Navbar } from './fragments/components/navbar'
/*
import { Homepage } from './fragments/homepage'
import { Discover } from './fragments/discover'
import { About } from './fragments/about'
import { All } from './fragments/all'
*/

import { Homepage } from './fragments/homepage'
import { Discover } from './discover/discover'
import { About } from './about/about'
import { All } from './all/all'

import { Router } from "preact-router"

import './app.css'

export function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Homepage path="/" default />
        <Discover path="/discover" />
        <All path="/all" />
        <About path="/about"/>
      </Router>
      <Footer />
    </>
  )
}

/* import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg' */

/*
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Better Experience Search</h1>
      <div class="card">
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
*/
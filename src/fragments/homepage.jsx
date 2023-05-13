import { Fragment } from 'preact';

export function Homepage() {
  return (
    <Fragment>
      <HomepageContent />
    </Fragment>
  )
}

function HomepageContent() {
  return (
    <main>
      <h1>Better Experience Search</h1>
      <p>A (hopefully) better implementation of Roblox's experience search</p>
      <p>Stuff might break constantly, I generally fix it as soon as I find the issue.</p>
    </main>
  )
}

/*
function SplashContent() {
  return (
    <main>
      <h1>Better Experience Search</h1>
      <p>A (hopefully) better implementation of Roblox's experience search</p>
      <div class="card">
        <p>
          navbar shit goes here
        </p>
      </div>
    </main>
  )
}
*/

/*
function SplashContent() {
  return (
    <main>
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
    </main>
  )
}
*/
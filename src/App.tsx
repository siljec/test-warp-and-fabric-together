import './App.css'
import { Button } from '@fabric-ds/react';

function App() {

  return (
    <>
      <h1>Vite + React + Warp </h1>

      <div>
        <h2>Buttons</h2>
        <div className="flex">
          <section className="shadow-4 ds-section flex flex-col">
            <p>Fabric</p>
            <Button>Default</Button>
            <Button primary>Primary</Button>
            <Button negative>Negative</Button>
            <Button secondary>Secondary</Button>
            <Button loading>Loading</Button>
            <Button small>Small</Button>
            <Button pill>Pill</Button>
            <Button href="https://react.fabric-ds.io/button">Href</Button>
            <Button link>Link</Button>
            <Button quiet>Quiet</Button>
          </section>
          <section className="shadow-4 ds-section">
            <p>Warp</p>
            <Button type="">TODO</Button>
          </section>
          
        </div>
      </div>
    </>
  )
}

export default App

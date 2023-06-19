import './App.css'
import { Button as FButton } from '@fabric-ds/react';
import { Button as WButton } from '@warp-ds/react';

function App() {
  return (
    <>
      <h1>Fabric + Warp </h1>
      <div>
        <h2>Buttons</h2>
        <div className="flex">
          <section className="shadow-4 ds-section flex flex-col">
            <p>Fabric</p>
            <FButton>Default</FButton>
            <FButton primary>Primary</FButton>
            <FButton negative>Negative</FButton>
            <FButton secondary>Secondary</FButton>
            <FButton loading>Loading</FButton>
            <FButton small>Small</FButton>
            <FButton pill>Pill</FButton>
            <FButton href="https://react.fabric-ds.io/button">Href</FButton>
            <FButton link>Link</FButton>
            <FButton quiet>Quiet</FButton>
          </section>
          <section className="shadow-4 ds-section flex flex-col">
            <p>Warp</p>
            <WButton>Default</WButton>
            <WButton primary>Primary</WButton>
            <WButton negative>Negative</WButton>
            <WButton secondary>Secondary</WButton>
            <WButton loading>Loading</WButton>
            <WButton small>Small</WButton>
            <WButton pill>Pill</WButton>
            <WButton href="https://react.fabric-ds.io/button">Href</WButton>
            <WButton link>Link</WButton>
            <WButton quiet>Quiet</WButton>
          </section>
        </div>
      </div>
    </>
  )
}

export default App

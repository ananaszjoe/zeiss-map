import { useState } from 'react';
import './App.css';

function App() {
  const [ machine, setMachine ] = useState<string>()

  const x = () => {
    setMachine('1');
  }

  return (
    <>
      <header>
        <h1>ZEISS MachineStream Machines</h1>
      </header>
        <button onClick={x}>hello</button>

      <section>
        {!!machine && (
          <aside>
            <p>Hippopotomonstrosesquippedaliophobia</p>
          </aside>
        )}
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
        </main>
      </section>
    </>
  )
}

export default App

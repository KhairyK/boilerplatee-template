import { useState } from "react"
import "./styles/home.css"

export default function Home() {

  const [count, setCount] = useState(0)

  return (
    <div className="home">

      <h1>🚀 Welcome to Boilerplatee</h1>

      <p>Your React app is ready. Start building something awesome.</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <p className="hint">
        Edit <code>src/pages/Home.jsx</code> to start developing.
      </p>

    </div>
  )
}
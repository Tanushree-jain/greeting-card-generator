// import { useState } from 'react'
import './App.css'
import bgImage from './assets/floral.jpg';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   
<div className="App"   style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }}>
    
  <h1>WishWeaver</h1>

  <form>
    <div>
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion">
        <option value="Birthday">Birthday</option>
        <option value="Thank You">Thank You</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Farewell">Farewell</option>
        <option value="Farewell">Invitation</option>
      </select>
    </div>

    <div>
      <label htmlFor="name">Recipient's Name:</label>
      <input type="text" id="name" placeholder="Enter name" />
    </div>

    <div>
      <label htmlFor="message">Message:</label>
      <textarea id="message" placeholder="Write your message here"></textarea>
    </div>
  </form>
</div>

    </>
  )
}

export default App

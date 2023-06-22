import Navbar from './components/Navbar'
import './App.scss'
import { useState } from 'react'

function App() {
  // const [darkmode, setDarkmode] = useState(false);

  // function toggleTheme() {
  //   setDarkmode(prevTheme => !prevTheme)
  // }

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App

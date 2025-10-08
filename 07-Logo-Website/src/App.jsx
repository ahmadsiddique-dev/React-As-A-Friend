import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from './components/header/Navbar'
// import Footer from './components/Footer/Footer'
// import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center><h1 className='text-neutral-900 text-lg font-semibold py-3 px-16 bg-green-600'>Ahmad Siddique</h1></center>
      {/* <Header/>
      <Home/>
      <Footer/> */}
    </>
  )
}

export default App

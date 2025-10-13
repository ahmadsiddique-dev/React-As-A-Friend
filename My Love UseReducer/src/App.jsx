import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import TaskApp from './components/TaskApp'
import RecipeComponent from './components/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TaskApp/> */}
    <RecipeComponent/>
    </>
  )
}

export default App

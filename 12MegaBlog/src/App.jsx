import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {logout, login} from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout)
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? <div className='flex flex-wrap content-between bg-gray-400 min-h-screen'>
    <div className="w-full block">
      <Header/>
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer/>
    </div>
  </div> : null
}

export default App

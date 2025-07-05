import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'

function App() {

  return (
    <main className='container mx-auto'>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default App

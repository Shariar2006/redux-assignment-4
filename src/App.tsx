import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <main className='container mx-auto'>
      <Navbar/>
      <div className='min-h-[60vh] px-4'>

      <Outlet/>
      </div>
      <Footer/>
    </main>
  )
}

export default App

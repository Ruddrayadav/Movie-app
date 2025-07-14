
import Home from './Project-1/components/Home'
import Favourite from './Project-1/components/favourite'
import  { Routes , Route } from 'react-router-dom'
import Navbar from './Project-1/components/Navbar'
import "./Project-1/css/App.css"
import Footer from './Project-1/context/footer'
function App() {

  return (

  <div>
    <Navbar />
  <main className='main-content'>
  <Routes>
    <Route path='/' element ={<Home/>} />
   <Route path='/favourite' element={<Favourite />} />

  </Routes>
  </main>
  <Footer />
  </div>
  )
}

export default App;

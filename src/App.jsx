import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Booklist from './components/Booklist'
import Book from './components/Book'
import NotFound from './components/NotFound'
import About from './components/About'
import ContactUs from './components/ContactUs'
import NewBook from './components/NewBook'

function App() {

  const location = useLocation()

  return (
      <>
      {/* defining the routes */}
      
      {/* a bit messy */}
      <Routes>
        {/* '/' : Home */}
        <Route path='/' element={<Home />}/>
        <Route path='/books'>
          <Route index element={<Booklist/>}/>
          <Route path=':id' element={<Book/>}/>
          <Route path='newBook' element={<NewBook/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>


      {/* <nav style={{display: location.pathname === '/'? 'block':'none'}}>
        <ul>
          <li><Link to='/books'>Booklist</Link></li>
        </ul>
      </nav> */}
      <nav style={{display: location.pathname === '/'? 'block':'none'}}>
          <ul>
            <ul><Link to='/books'>Booklist</Link></ul>
            <ul><Link to='/about'>About Us</Link></ul>
            <ul><Link to='/contact'>Contact</Link></ul>
          </ul>
      </nav>



    </>
  )
}

export default App

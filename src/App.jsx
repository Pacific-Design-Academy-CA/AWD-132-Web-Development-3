import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Booklist from './components/Booklist'
import Book from './components/Book'
import NotFound from './components/NotFound'
import About from './components/About'
import ContactUs from './components/ContactUs'
import NewBook from './components/NewBook'
import Signup from './components/Signup'
import Button from '@mui/material/Button'
import {BookSharp, ContactEmergency, House, Info, Login, QuestionAnswer} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom/dist'

function App() {

  const location = useLocation()
  const navigate = useNavigate()
  const margin = 10
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
        <Route path='/signup' element={<Signup/>} />
      </Routes>


      {/* <nav style={{display: location.pathname === '/'? 'block':'none'}}>
        <ul>
          <li><Link to='/books'>Booklist</Link></li>
        </ul>
      </nav> */}

      <nav style={{display: location.pathname === '/'? 'block':'none',marginLeft:-20 }}>
          <ul>
            <Button startIcon={<Login/>} style={{margin: margin}} onClick={()=>{navigate('/signup')}} variant="outlined">Signup</Button>
            <Button startIcon={<BookSharp/>} style={{margin: margin}} onClick={()=>{navigate('/books')}} variant="outlined">Booklist</Button>
            <Button startIcon={<House/>} style={{margin: margin}} onClick={()=>{navigate('/')}} variant="outlined">Home</Button>
            <Button startIcon={<Info/>} style={{margin: margin}} onClick={()=>{navigate('/about')}} variant="outlined">About</Button>
            <Button startIcon={<QuestionAnswer/>} style={{margin: margin}} onClick={()=>{navigate('/contact')}} variant="outlined">Contact</Button>
           </ul>
          
      </nav>



    </>
  )
}

export default App

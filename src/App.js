import React,{useState} from 'react'
import "../src/App.css"
import Form from './components/Contactform/Form'
import Nav from './components/Navbar/Nav'
import {Route,Routes} from 'react-router-dom'
import {data} from './components/context/Context'
import Contact from './components/Contacts/Contact'

function App() {

const [contact,setcontact] = useState([])


  return (
    <div className='main'>
      <data.Provider value={{contact,setcontact}}>
      <Nav/>
<Routes>
<Route path='/' element={<Form/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>

</Routes>
      </data.Provider>



    </div>
  )
}

export default App
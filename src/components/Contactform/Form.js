import React,{useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../Contactform/Form.css"
import { data } from '../context/Context'


function Form() {
const navigate=useNavigate()
    const{contact,setcontact}=useContext(data)
const [value,setValue]=useState({
    name:"",
    contact:"",
    email:"",
    address:"",
    description:""
  })
const handle=(e)=>{
    e.preventDefault()
    const arr=[...contact]
    arr.push(value)
    setcontact(arr)
    setValue({
        name:"",
    contact:"",
    email:"",
    address:"",
    description:""
    })
    navigate("/contact")

}
const inphandle=(e)=>{
setValue({...value,[e.target.name]:e.target.value})
    
}


  return (
    <>
    <div className='container1'>
        <div className="formcontainer">
            <div className='head'><h2>Enter your details</h2></div>
            <div className="form">
                <form onSubmit={handle} >
                    <input type="text" name='name' value={value.name} onChange={inphandle} placeholder='name' />
                    <input type="text" name="contact" value={value.contact} onChange={inphandle} placeholder='contact' />
                    <input type="text" name="email" value={value.email} onChange={inphandle} placeholder='email' />
                    <input type="text" name="address" value={value.address} onChange={inphandle} placeholder='address' />
                    <input type="text" name="description" value={value.description} onChange={inphandle} placeholder='description' /> 
                    <button type="submit" name="">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Form
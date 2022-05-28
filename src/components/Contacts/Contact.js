import React,{useContext} from 'react'
import "../Contacts/Contact.css"
import { data } from '../context/Context'
function Contact() {
    const{contact,setcontact}=useContext(data)
    const deleteContact=(e)=>{
const arr2=[...contact]
arr2.splice(e.target.id,1)
setcontact(arr2)
    }
const holder=contact.map((elem,id)=>{
return <div className='contact' key={id}>
<p>{id+1}</p><h3>Name:{elem.name}</h3>
<h3>Contact:{elem.contact}</h3>
<h3>Email:{elem.email}</h3>
<h3>Address:{elem.address}</h3>
<h3>Description:{elem.description}</h3>
<h3 onClick={deleteContact}><i class="ri-delete-bin-7-fill"></i></h3>
</div>

})

  return (
    <div className='container2'>
{contact.length===0?<h1 className='heading'>No contacts</h1>:holder}

            </div>
  )
}

export default Contact
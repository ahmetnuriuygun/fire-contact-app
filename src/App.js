import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ShowList from './components/ShowList'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';


const App = () => {

  

  const [name,setName] = useState()
  const [phone,setPhone] = useState()
  const [gender,setGender] = useState()
  const [id,setId] = useState("")
  const [edit,setEdit] =useState(false)


  return (
    <div className='d-flex justify-content-around center'>
    <div className='d-flex flex-column'>
      <Header/>
      <Form 
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          gender={gender}
          setPhone={setPhone}
          setGender={setGender}
          id={id} 
      />
    </div>
      
      <ShowList
          edit={edit}
          setEdit={setEdit}
          name={name}
          setName={setName}
          phone={phone}
          gender={gender}
          setPhone={setPhone}
          setGender={setGender}
          id={id}
          
      />
      <ToastContainer/>
    </div>

  )
}

export default App

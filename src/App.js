
import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from './components/contacts/Contacts'
import { useState } from 'react';
import {AddUser,UpdateUser} from "./utils/functions"
import {ToastContainer} from "react-toastify"

const initialValues={username:"",phoneNumber:"",gender:""}

function App() {
  const [info,setInfo]=useState(initialValues);
  const [isAdd,setIsAdd]=useState("ADD")
  const handleSubmit=(e)=>{
    e.preventDefault();
  if(info.id){
    UpdateUser(info)
  }
  else{
    AddUser(info)
    setIsAdd("ADD")
  }

   
  }


  const EditUser=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender})
    setIsAdd("UPDATE")

  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} isAdd={isAdd}/>
      <Contacts EditUser={EditUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App;

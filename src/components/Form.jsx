import { update } from '@firebase/database'
import React from 'react'
import { useState } from 'react'
import {FaUser} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import { writeToDataBase} from "../firebase/firebase"
import { toastSuccessNotify } from '../Helpers/ToastNotify'

const Form = ({edit, setEdit, name, setName, phone, setPhone, gender, setGender, id}) => {

   

    const handleSubmit = (e) =>{
        e.preventDefault()
        writeToDataBase(name,phone,gender,id)
        console.log(name,phone,gender)
        setName("") 
        setPhone("")
        setGender("")
        setEdit(false)
        toastSuccessNotify("Added succesfully!")
        
    }

  


  return (
    <div>
    <div className='bg-white mt-5 text-center header '>
    <h3 className='pt-3'>ADD CONTACT</h3></div>

    <div className='mt-3 bg-white divform'>
        <form className='text-center pt-2' onSubmit={handleSubmit}>
            <div className='box'>
                <span> <FaUser/> </span>
                <input type="text" name="name" id="name" value={name} placeholder='Name' className='inputbox' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='box'>
                <span> <FaPhone/> </span>
                <input type="number" name="phone" id="phone" value={phone} placeholder='Phone Number' className='inputbox' onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div className='box'>
                <select name="gender" id="gender" className='inputbox' value={gender} onChange={(e)=>setGender(e.target.value)} >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            {edit ? (
                <div>
                <button className='btn btn-warning text-center mt-3 btn-lg button'>Update</button>
                </div>
            ):(
            <div>
                <button className='btn btn-success text-center mt-3 btn-lg button'>Add</button>
            </div>
            )}
            
        </form>
    </div>
    </div>
    
    
  )
}

export default Form
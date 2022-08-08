import { onValue, ref, push, getDatabase, remove, update } from '@firebase/database'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {FaTrash} from "react-icons/fa"
import {FaPenSquare} from "react-icons/fa"
import { toastDeletedNotify, toastUpdatedNotify } from '../Helpers/ToastNotify'

const ShowList = ({edit, setEdit, name, setName, phone, setPhone, gender, setGender, id,setId}) => {
    
    const [contactArray,setContactArray] = useState([])
    const db = getDatabase()
    
    

// console.log(contactArray)




    useEffect(()=>{
    const displayToScreen = ref(db, "contact");
    onValue(displayToScreen, (snapshot) => {
    const data = snapshot.val();
    const contactArray = []
    for (let id in data) {
        contactArray.push({id,...data[id],})
    }
    setContactArray(contactArray)
    });
    },[]);

    const handleDelete = (id) =>{
        remove(ref(db,"contact/" + id));
        toastDeletedNotify("Deleted Succesfully!");
};


    const handleEdit = (e) =>{
        setName(e.name)
        setPhone(e.phone)
        setGender(e.gender)
        setId(e.id)
        setEdit(false)
        toastUpdatedNotify("Updated Succesfully!")
}







return (
    <div>
        <div className='bg-white headercontacts'>
            <header>
                <h3 className='text-center pt-2'>CONTACTS</h3>
            </header>
        </div>


        <div className='mt-3 bg-white'>
        
            <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Phone </th>
                    <th>Gender</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>

                <tbody>
                {contactArray?.length === 0 ? 
                (
                    <tr className='text-center'>
                        <td colSpan={5}>Nothing to Found</td>
                    </tr>
                ) : (
                    contactArray.map((item)=>{
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.gender}</td>
                            <td> <button  onClick={()=>handleDelete(item.id)}><FaTrash className='text-danger h4'/></button></td>
                            <td> <button onClick={()=>handleEdit(item)}><FaPenSquare className='text-warning h4'/></button></td>
                        </tr>
                    )
                })
                )}
                </tbody>  
            </table>
        </div>
    </div>
)
}

export default ShowList
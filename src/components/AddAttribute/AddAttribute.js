import React, { useState } from 'react';
import '../ProductInfo/ProductInfo.css'
import '../AddAttribute/AddAttribute.css'
import { useAddAttributeMutation } from '../../servises/apis';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  const [AddAttribute] = useAddAttributeMutation()
  const nav = useNavigate()

  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const formData = new FormData()

  formData.append(" Name", name)
  formData.append("Value", value)

  const handelClick = () => {
    if (name !== '' && name !== null && value !== '' && value !== null) {
      AddAttribute(formData)
      nav('/Attributes')
    }
    else{
      toast.error("Wow so easy!" ,{
        position:'top-right'
      })
    }
  }

  return (
    <>
      <div className="mainDiv" style={{ height: '100vh' }}>

        <div className="ProductInfoMain">
          <div className="ProductInfo">Add Attribute </div>


          <div className="ProductInfoName">
        
            <label htmlFor="">Attribute Name</label>
            <input className='input' type="text" placeholder='Attribute Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="ProductInfoName">
            <label htmlFor="">Attribute Value</label>
            <input className='input' type="text" placeholder='Attribute Value' value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="ProductInfoName">
            <button className='button' onClick={handelClick}>Add Attribute</button>
            <ToastContainer />
          </div>
         
        </div>
      </div>
    </>
  );
}

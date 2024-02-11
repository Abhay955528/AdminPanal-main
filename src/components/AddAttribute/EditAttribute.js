import React, { useState } from 'react';
import '../ProductInfo/ProductInfo.css'
import '../AddAttribute/AddAttribute.css'
import { useUpdateAttributeMutation } from '../../servises/apis';
import { useLocation, useNavigate } from 'react-router';


export default function App() {

  const [updateAttribute] = useUpdateAttributeMutation()
  const nav = useNavigate()
  const Location = useLocation()
  const [name, setName] = useState(Location.state.Name)
  const [value, setValue] = useState(Location.state.Value)


  const handelClick = () => {
    const formData = new FormData()
    formData.append("id", Location.state.id)
    formData.append("Name", name)
    formData.append("Value", value)
    updateAttribute(formData)
    nav('/Attributes')

  }

  return (
    <>
      <div className="mainDiv" style={{ height: '100vh' }}>

        <div className="ProductInfoMain">
          <div className="ProductInfo">Update Attribute </div>


          <div className="ProductInfoName">
            <label htmlFor="">Attribute Name</label>
            <input className='input' type="text" placeholder='Attribute Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="ProductInfoName">
            <label htmlFor="">Attribute Value</label>
            <input className='input' type="text" placeholder='Attribute Value' value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div className="ProductInfoName">
            <button className='button' onClick={handelClick}>Update Attribute</button>
          </div>
        </div>
      </div>
    </>
  );
}

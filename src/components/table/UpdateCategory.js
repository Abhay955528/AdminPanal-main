import React, { useState } from 'react'
import "./AddCategory.css"
import { useRef } from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useUpdateCatMutation } from '../../servises/apis';
import { useLocation, useNavigate } from 'react-router';
// import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
function UpdateCategory() {
  const Location = useLocation()
  const [UpdateCat] = useUpdateCatMutation()
  //   const [addCategory, result] = useAddCategoryMutation()
  const [Category, setCategory] = useState(Location.state.Category);
  const [productId, setProductId] = useState(Location.state.Product_id)
  const [Status, setStatus] = useState(Location.state.Status)
  const [Slug, setSlug] = useState(Location.state.Slug)
  const [ISShowing, setISShowing] = useState(Location.state.ISShowing);
  const [DCategory, setDCategory] = useState(Location.state.DCategory)
  const [Offer, setOffer] = useState(Location.state.Offer)
  // const [Thumb, setThumb] = useState("")
  const [Image, setImage] = useState(false)
  const navigate = useNavigate()

  const imageRef = useRef(null)
  function handlOnChangeimage() {
    imageRef.current.click()
  }


  function imageUpload(e) {
    setImage(e.target.files[0])
  }


  const UpdateCategory = async()=> {
    const formData = new FormData()
    formData.append("id", Location.state.id)
    formData.append("Category", Category)
    formData.append("Product_id", productId)
    formData.append("Thumb", Image)
    formData.append("Slug", Slug)
    formData.append("DCategory", DCategory)
    formData.append("Offer", Offer)
    formData.append("ISShowing", ISShowing)
    formData.append("Status", Status)
  await UpdateCat(formData)
    console.log(formData)
    navigate("/Category")
  }
  //   console.log(result)
  return (
    <div className='Category_container'>
      <div>
        <h1>Category information</h1>
      </div>
      <div>
        <span>Category Name:</span>
        <input type="text" placeholder='Category Name' value={Category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <span>Product Id:</span>
        <input type='text' placeholder='Product Id' value={productId} onChange={(e) => setProductId(e.target.value)} />
      </div>
      {/* <div onClick={handlOnChangeimage} className='Category_image_container' width='70%'>
        <span>Add Category image:</span>
        {
          Image ? (<img src={URL.createObjectURL(Image)} alt="img" width='50%' height='200px' style={{ border: "1px dashed gray", padding: "10px" }} />) : (
            <div className='DefaulUploadIcons' style={{ backgroundColor: "inherit", border: "1px dashed gray", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70%"  , height:'32vh' , borderRadius:'5px'}}>

              <CloudUploadOutlinedIcon style={{ color: "green" }} />
              <p>Upload Image</p>
            </div>)

        }
        <input type="file" ref={imageRef} style={{ display: "none" }} onChange={imageUpload} />
      </div> */}
      <div>
        <span>Slug:</span>
        <input type="text" placeholder='Slug' value={Slug} onChange={(e) => setSlug(e.target.value)} />
      </div>
      <div>
        <span>DCategory:</span>
        <input type="text" placeholder='DCategory' value={DCategory} onChange={(e) => setDCategory(e.target.value)} />
      </div>
      <div>
        <span>Offer:</span>
        <input type="text" placeholder='Offer' value={Offer} onChange={(e) => setOffer(e.target.value)} />
      </div>
      {/* <div>
        <span>Select Category icon</span>
        <select name="icons" id="icons">
            <option value="" disabled selected>Select icon</option>
            <option value="1">chai</option>
            <option value="1">coeffie</option>
            <option value="1">chockolate</option>
            <option value="1">aata</option>
            <option value="1">tata</option>
        </select>
      </div> */}

      <div className="ProductInfoSwitch" style={{ display: "grid", width: "100%", justifyContent: "space-between", gap: "90px", alignItems: "center" , }}>
        <span htmlFor="">ISShowing:</span>
        <div class="form-check form-switch" style={{ width: "100%"  }}>
          <input class="form-check-input" type="checkbox" role="switch"  checked={parseInt(ISShowing)}  id="flexSwitchCheckCheckeds" onChange={(e) => setISShowing(e.target.checked === true ? "1" : "0")} />
        </div>
      </div>
      <div className="ProductInfoSwitchAddCategory" style={{ display: "grid", width: "100%", justifyContent: "space-between", gap: "90px", alignItems: "center" }}>
        <span htmlFor="">Status:</span>
        <div class="form-check form-switch" style={{ width: "100%" }}>
          <input class="form-check-input" type="checkbox" role="switch"  checked={parseInt(ISShowing)}  id="flexSwitchCheckCheckeds" onChange={(e) => setStatus(e.target.checked === true ? "1" : "0")} />
        </div>
      </div>

      {/* <div className="ProductInfoSwitch" style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "120px", alignItems: "center" }}>
        <span htmlFor="">ISShowing:</span>
        <div class="form-check form-switch" style={{ width: "100%" }}>
          <input class="form-check-input" type="checkbox" role="switch" checked={parseInt(ISShowing)} id="flexSwitchCheckChecked" onChange={(e) => setISShowing(e.target.checked === true ? "1" : "0")} />
        </div>
      </div>
      <div className="ProductInfoSwitch" style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "120px", alignItems: "center" }}>
        <span htmlFor="">Status:</span>
        <div class="form-check form-switch" style={{ width: "100%" }}>
          <input class="form-check-input" type="checkbox" role="switch" checked={parseInt(Status)} id="flexSwitchCheckChecked" onChange={(e) => setStatus(e.target.checked === true ? "1" : "0")} />
        </div>
      </div> */}
      <button className='buttons' onClick={UpdateCategory} style={{ width: "fit-content", padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "rgb(76, 159, 120)", color: "white" }}>Update Category</button>
    </div>
  )
}

export default UpdateCategory

import React, { useState } from 'react'
import "./AddCategory.css"
import { useRef } from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useAddCategoryMutation } from '../../servises/apis';
import { useNavigate } from 'react-router';
// import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
function AddCategory() {
  const [addCategory] = useAddCategoryMutation()
  const [Category, setCategory] = useState("");
  const [productId, setProductId] = useState("")
  const [Status, setStatus] = useState("0")
  const [Slug, setSlug] = useState("")
  const [ISShowing, setISShowing] = useState("0");
  const [DCategory, setDCategory] = useState("")
  const [Offer, setOffer] = useState("")
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


  const formData = new FormData()
  formData.append("Category", Category)
  formData.append("Product_id", productId)
  formData.append("Thumb", Image)
  formData.append("Slug", Slug)
  formData.append("DCategory", DCategory)
  formData.append("Offer", Offer)
  formData.append("ISShowing", ISShowing)
  formData.append("Status", Status)
  function AddCategory() {
    addCategory(formData)
    navigate("/Category")
  }
  // console.log(result)

  return (
    <div className='Category_container'>
      <div >
        <h1 className='AddCategory'>Category information</h1>
      </div>
      <div className='DivCategoryCoantner'>
        <span className='SpanText'>Category Name:</span>
        <input type="text" placeholder='Category Name' onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <span>Product Id:</span>
        <input type='number' placeholder='Product Id' onChange={(e) => setProductId(e.target.value)} />
      </div>
      {/* <div onClick={handlOnChangeimage} className='Category_image_container' width='70%'>
        <span>Add Category image:</span>
        {
          Image ? (<img src={URL.createObjectURL(Image)} alt="img" width='50%' height='200px' style={{ border: "1px dashed gray", padding: "10px" }} />) : (
            <div className='DefaulUploadIcons' style={{ backgroundColor: "inherit", border: "1px dashed gray", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "70%", height: '32vh' , borderRadius:'5px' }}>

              <CloudUploadOutlinedIcon style={{ color: "green" }} />
              <p>Upload Image</p>
            </div>)

        }
        <input type="file" ref={imageRef} style={{ display: "none" }} onChange={imageUpload} />
      </div> */}
      <div>
        <span>Slug:</span>
        <input type="text" placeholder='Slug' onChange={(e) => setSlug(e.target.value)} />
      </div>
      <div>
        <span>DCategory:</span>
        <input type="text" placeholder='DCategory' onChange={(e) => setDCategory(e.target.value)} />
      </div>
      <div>
        <span>Offer:</span>
        <input type="text" placeholder='Offer' onChange={(e) => setOffer(e.target.value)} />
      </div>


      <div className="ProductInfoSwitch" style={{ display: "grid", width: "100%", justifyContent: "space-between", gap: "100px", alignItems: "center" }}>
        <span htmlFor="">ISShowing:</span>
        <div class="form-check form-switch" style={{ width: "100%" }}>
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckeds" onChange={(e) => setISShowing(e.target.checked === true ? "1" : "0")} />
        </div>
      </div>
      <div className="ProductInfoSwitchAddCategory" style={{ display: "grid", width: "100%", justifyContent: "space-between", gap: "100px", alignItems: "center" }}>
        <span htmlFor="">Status:</span>
        <div class="form-check form-switch" style={{ width: "100%"  }}>
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckeds" onChange={(e) => setStatus(e.target.checked === true ? "1" : "0")} />
        </div>
      </div>
      <button onClick={AddCategory} className='buttons' style={{ width: "fit-content", padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "rgb(76, 159, 120)", color: "white" }}>Add Category</button>
    </div>
  )
}

export default AddCategory

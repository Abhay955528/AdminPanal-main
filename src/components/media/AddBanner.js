import React from 'react'
import "./AddBanner.css"
// import { useGetProductsQuery } from '../../servises/apis'
import { useRef, useState } from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useAddBannerMutation } from '../../servises/apis';
import { useNavigate } from 'react-router';
function AddBanner() {
  const imageRef = useRef(null)
  // const btnsRef = useRef(null)
  const [Image, setImage] = useState(false)
  const navigate = useNavigate()
  // const {data, isLoading, isError ,isSuccess} = useGetProductsQuery()

  // const { data, isLoading, isError, isSuccess } = useGetProductsQuery()
  // console.log(data);
  const [addBanner] = useAddBannerMutation()
  const [type, settype] = useState("");
  const [Category, setCategory] = useState("")
  const [UseIn, setUsIn] = useState("")
  const [Status, setStatus] = useState("")
  // const [obj, setobj] = useState({})

  function handlOnChangeimage() {
    imageRef.current.click()
  }


  function imageUpload(e) {
    setImage(e.target.files[0])
  }

  const formData = new FormData()
  formData.append("Type", type)
  formData.append("UseIn", UseIn)
  formData.append("Category", Category)
  formData.append("image", Image)
  formData.append("Status", Status)

  function AddBannerData() {
    addBanner(formData)
    console.log(formData)
    navigate("/Media")
  }


  //   function changeFileExtension(fileName, newExtension) {
  //     const parts = fileName.split(".");
  //     if (parts.length > 1) {
  //       parts[parts.length - 1] = newExtension;
  //       return parts.join(".");
  //     } else {
  //       return fileName; 
  //     }
  //   }
  //   const originalFileName = "IMG20231107013753.heic";
  // const newExtension = "jpg";
  // const newFileName = changeFileExtension(originalFileName, newExtension);
  // Image.name = newFileName
  //console.log(newFileName)
  return (
    <div className='AddMedia_container'>
      <div>
        <h1>Banners and Posters</h1>
      </div>
      <div className='Form_container'>
        <div className='tabs'>
          <div onClick={() => settype("Mobile")} style={{ backgroundColor: type === "Mobile" && "green" }}>Mobile</div>
          <div onClick={() => settype("Tablet")} style={{ backgroundColor: type === "Tablet" && "green" }}>Tablet</div>
          <div onClick={() => settype("Desktop")} style={{ backgroundColor: type === "Desktop" && "green" }}>Desktop</div>
        </div>

        <div className='AddBannerMainCantaner'>
          <span className='TitleAddBaner'>Select Category:</span>
          <select className='AddBannerInput' name="Category" id="Category" value={Category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled selected>Select Category</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
        </div>
        <div className='AddBannerMainCantaner'>
          <span >use In :</span>
          <select className='AddBannerInput' name="UseIn" id="UseIn" value={UseIn} onChange={(e) => setUsIn(e.target.value)}>
            <option value="" disabled selected>Select useIn</option>
            <option value="banner">Banners</option>
            <option value="Posts"> Posts</option>
            <option value="Header">Header</option>
            <option value="Product Card">Product Card</option>
          </select>
        </div>
        <div className='AddBannerMainCantaner' style={{marginTop:'2rem'}}>
         
            <p  className='TitleAddBaner'  style={{color:'black'}}>Banner image:</p>
            <div className='' onClick={handlOnChangeimage}>
              {
                Image ? (<img src={URL.createObjectURL(Image)} alt="img" className='upleadedImage' />) : (
                  <div className='DefaulUploadIcon' style={{ backgroundColor: "inherit" }}>

                    <CloudUploadOutlinedIcon style={{ color: "green" }} />
                    <p>Upload Image</p>
                  </div>)

              }
              <input type="file" ref={imageRef} style={{ display: "none" }} onChange={imageUpload} />
            </div>
          
        </div>
        <div  >
          <div className='AddBannerMainCantaner' style={{ marginTop:'2.5rem'}}>
            <span htmlFor=""  style={{color:'black' , textAlign:'left'}} >Status</span>
            <div class="form-check form-switch" style={{ width: "100%"   , color:'black'}}>
              <input  style={{border:'1px solid black' , marginLeft:'0rem' , width:'3em' , height:'3vh'}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedAdd" onChange={(e) => setStatus(e.target.checked === true ? "1" : "0")} />
            </div>
          </div>
          <button onClick={AddBannerData}>Add Banner</button>
        </div>
      </div>
    </div>
  )
}

export default AddBanner

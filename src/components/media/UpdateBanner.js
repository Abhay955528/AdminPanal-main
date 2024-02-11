import React  from 'react'
import "./AddBanner.css"
import {  useUpdateBanMutation } from '../../servises/apis'
import { useRef,useState } from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
// import { useAddBannerMutation } from '../../servises/apis';
import { useLocation, useNavigate } from 'react-router';
function UpdateBanner() {
  const Location = useLocation()
  const TempImg = `https://estilo.phoneo.in/public/${Location.state.Path}`
  const imageRef = useRef(null)
  // const btnsRef = useRef(null)
  const [Image, setImage] = useState(TempImg)
  const navigate = useNavigate()
  // const {data, isLoading, isError ,isSuccess} = useGetProductsQuery()
  
  // const {data, isLoading, isError ,isSuccess} = useGetProductsQuery()
  // console.log(data);
  // const [addBanner,result] = useAddBannerMutation()
  const [UpdateBan]=useUpdateBanMutation()
  const [type, settype] = useState(Location.state.Type);
  const [Category,setCategory] = useState(Location.state.Category)
  const [UseIn,setUsIn] = useState(Location.state.UseIn)
  const [Status,setStatus] = useState(Location.state.Status)
  const [isImageChangeClicked ,setisImageChangeClicked] = useState(false)
  // const [obj,setobj] = useState({})
  console.log(Location.state)

  function handlOnChangeimage(){
    imageRef.current.click()
  }


  function imageUpload(e){
    setImage(e.target.files[0])
    setisImageChangeClicked(true)
  }
  
  const formData = new FormData()
  formData.append("id",Location.state.id)
  formData.append("Type",type)
  formData.append("UseIn",UseIn)
  formData.append("Category",Category)
  formData.append("image",Image)
  formData.append("Status", Status)

  function AddBannerData(){
    // addBanner(formData)
    UpdateBan(formData)
    navigate("/Media")
  }
  return (
    <div className='AddMedia_container'>
       <div>
        <h1>Banners and Posters</h1>
      </div>
      <div className='Form_container'>
         <div className='tabs'>
          <div onClick={()=>settype("Mobile")} style={{backgroundColor:type==="Mobile"&&"green"}}>Mobile</div>
          <div onClick={()=>settype("Tablet")} style={{backgroundColor:type==="Tablet"&&"green"}}>Tablet</div>
          <div onClick={()=>settype("Desktop")} style={{backgroundColor:type==="Desktop"&&"green"}}>Desktop</div>
         </div>
         
         <div>
            <span>Select Category:</span>
          <select name="Category" id="Category" value={Category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="" disabled selected>Select Category</option>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
         </div>
         <div>
         <span>use In :</span>
          <select name="UseIn" id="UseIn" value={UseIn} onChange={(e)=>setUsIn(e.target.value)}>
          <option value="" disabled selected>Select useIn</option>
            <option value="banner">Banners</option>
            <option value="Posts"> Posts</option>
            <option value="Header">Header</option>
            <option value="Product Card">Product Card</option>
          </select>
          </div>
         <div>

          <p>Banner image:</p>
          <div className='addimageContainer' onClick={handlOnChangeimage}>
            {
              Image?(<img src={isImageChangeClicked!==true ? Image:URL.createObjectURL(Image)} alt="img" className='upleadedImage'/>):(
                 <div className='DefaulUploadIcon' style={{backgroundColor:"inherit"}}>
      
                   <CloudUploadOutlinedIcon style={{color:"green"}}/>
                   <p>Upload Image</p>
                </div>)
              
            }
            <input type="file" ref={imageRef} style={{display:"none"}} onChange={imageUpload}/>
          </div>
         </div>
         <div >
         <div className='AddBannerMainCantaner' style={{ marginTop:'0rem'}}>
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

export default UpdateBanner

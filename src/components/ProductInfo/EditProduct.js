import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useUpdateProdMutation } from '../../servises/apis';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import './ProductInfo.css'






export default function EditAttribute() {
    const Location = useLocation()
    const [UpdateAttribute, result] = useUpdateProdMutation()
    const [Name, setName] = useState(Location.state.Name)
    // const [Value, setValue] = useState(Location.state.Value)
    const imageRef = useRef(null)
    const [Image, setImage] = useState(false)
    // const [Name, setName] = useState(Location.state.Name)
    const [Type, setType] = useState(Location.state.Type)
    const [Category, setCategory] = useState(Location.state.Category)
    const [Warranty, setWarranty] = useState(Location.state.Warranty)
    const [subcategory, setSubcategory] = useState(Location.state.subcategory)
    const [Brand, setBrand] = useState(Location.state.Brand)
    const [Unit, setUnit] = useState(Location.state.Unit)
    const [Tags, setTags] = useState(Location.state.Tags)
    const [Refundable, setRefundable] = useState(false)
    const [Exchangeble, setExchangeble] = useState(false)
    const [PurchasePrice, setPurchasePrice] = useState(Location.state.PurchasePrice)
    const [Description, setDescription] = useState(Location.state.Description)
    const [Quantity, setQuantity] = useState(Location.state.Quantity)
    const [AvailQuantity, setAvailQuantity] = useState(Location.state.AvailQuantity)
    const [Price, setPrice] = useState(Location.state.Price)
    const [Return, setReturn] = useState(Location.state.Return)
    const [Offer, setOffer] = useState(Location.state.Offer)
    const [SalePrice, setSaletPrice] = useState(Location.state.SalePrice)
    const [SKU, setSKU] = useState(Location.state.SKU)
    const [StockStatus, setStockStatus] = useState(Location.state.StockStatus)
    const [Attribute, setAttribute] = useState(Location.state.Attribute)
    const [Slug, setSlug] = useState(Location.state.Slug)
    const [Color, setColor] = useState(Location.state.Color)
    const nav = useNavigate()

    function handlOnChangeimage() {
        imageRef.current.click()
    }
    function imageUpload(e) {
        setImage(e.target.files[0])
    }

    const formData = new FormData()
    formData.append("id", Location.state.id)
    formData.append("Name", Name)
    formData.append('Price', Price)
    formData.append('DCategory', Category)
    formData.append('Quantity', Quantity)
    formData.append('Price', Price)
    formData.append('Status', StockStatus)

  const handelClick = async() => {
        if (Name !== '' && Category !== '' && Price !== '' && Quantity !== '' && Price !== '' && StockStatus !== undefined) {
          await UpdateAttribute(formData)
            nav("/Product")
        } else {
            alert('fill all Detail')
        }


    }
    // console.log(result);
    return (
        <>
            <div className="mainDiv">

                <div className="ProductInfoMain">
                    <div className="ProductInfo">Product Information</div>


                    <div className="ProductInfoName">
                        <label htmlFor="">Product Name</label>
                        <input className='input' type="text" placeholder='Product Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>


                    <div className="ProductInfoName">
                        <label htmlFor="">Product Type</label>
                        <select style={{ fontSize: '15px', padding: '10px', textAlign: 'center' }} value={Type} onChange={(e) => setType(e.target.value)} className="input">
                            <option value='' disabled selected> Select Type</option>

                            <option value='Mens' >Mens</option>
                            <option value='Women Bottoms'>Women Bottoms</option>
                            <option value='Kids'>Kids</option>
                            <option value='Seasonal Collection'>Seasonal Collection</option>
                        </select>
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Category</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={Category} onChange={(e) => setCategory(e.target.value)} className="input" >
                            {/* <option value='' disabled selected> Select Category</option> */}
                            <option value='Mens' >Mens</option>
                            <option value='Women Bottoms'>Women Bottoms</option>
                            <option value='Kids'>Kids</option>
                            <option value='Seasonal Collection'>Seasonal Collection</option>
                        </select>
                    </div>


                    <div className='ProductInfoName' onClick={handlOnChangeimage}>
                        <label htmlFor="">Product Image</label>
                        {
                            Image ? (<img style={{ width: '70%', height: '30vh' }} src={URL.createObjectURL(Image)} alt="img" className='upleadedImage' />) : (
                                <div className='DefaulUploadIcon' style={{ backgroundColor: "inherit", border: '1px dotted black', height: '30vh', borderRadius: '8px' }}>

                                    <CloudUploadOutlinedIcon style={{ color: "green" }} />
                                    <p>Upload Image</p>
                                </div>)

                        }
                        <input className='input' type="file" ref={imageRef} style={{ display: "none", border: '1px solid black' }} onChange={imageUpload} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Subcategory</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="input">
                            <option value='' disabled selected> Select Subcategory</option>
                            <option value='T-Shirt'>T-shirt</option>
                            <option value='Shirt'>Shirt</option>
                            <option value='Pant'>Pant</option>
                        </select>
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Brand</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={Brand} onChange={(e) => setBrand(e.target.value)} className="input">
                            <option value='' disabled selected> Select Brand</option>
                            <option value='Color'>Color</option>
                            <option value='Size'>Size</option>
                            <option value='Price'>Price</option>
                        </select>
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Unit</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={Unit} onChange={(e) => setUnit(e.target.value)} className="input">
                            <option value='' disabled selected> Select Unit</option>
                            <option value='1' >1</option>
                            <option value='2' >2</option>
                            <option value='3' >2</option>
                            <option value='4' >3</option>
                            <option value='5' >4</option>
                            <option value='6' >5</option>
                            <option value='7' >6</option>

                        </select>
                    </div>
                    <div className="ProductInfoName">
                        <label htmlFor="">Color</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={Color} onChange={(e) => setColor(e.target.value)} className="input">
                            <option value='' disabled selected> Select Color</option>
                            <option value='Red'>Red</option>
                            <option value='Black'>Black</option>
                            <option value='Yellow'>Yellow</option>
                        </select>
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Tags</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} value={Tags} onChange={(e) => setTags(e.target.value)} className="input">
                            <option value='' disabled selected> Select Tags</option>
                            <option value='Puma'>Color</option>
                            <option value='Puma'>Color</option>
                            <option value='Puma'>Color</option>

                        </select>
                    </div>

                    <div className="ProductInfoName" >
                        <label htmlFor="">Exchangeble</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" value={Exchangeble} onChange={(e) => setExchangeble(e.target.checked === true ? '1' : "0")} />
                        </div>
                    </div>


                    <div className="ProductInfoName">
                        <label htmlFor="">Refundable</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={Refundable} onChange={(e) => setRefundable(e.target.checked === true ? '1' : "0")} />
                        </div>
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Description</label>
                        <input className='input' type="text" placeholder='Product Description' value={Description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Attribute</label>
                        <input className='input' type="text" placeholder='Attribute Name' value={Attribute} onChange={(e) => setAttribute(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Slug</label>
                        <input className='input' type="text" placeholder='Slug Name' value={Slug} onChange={(e) => setSlug(e.target.value)} />
                    </div>


                    <div className="ProductInfoName">
                        <label htmlFor="">Purchase Price</label>
                        <input className='input' type="text" placeholder='Purchase Price' value={PurchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Price</label>
                        <input className='input' type="text" placeholder='Price' value={Price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Sale Price</label>
                        <input className='input' type="text" placeholder='Sale Price' value={SalePrice} onChange={(e) => setSaletPrice(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Offer</label>
                        <input className='input' type="text" placeholder='Offer' value={Offer} onChange={(e) => setOffer(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Quantity</label>
                        <input className='input' type="text" placeholder='Quantity' value={Quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="ProductInfoName">
                        <label htmlFor="">Avail Quantity</label>
                        <input className='input' type="text" placeholder='Avail Quantity' value={AvailQuantity} onChange={(e) => setAvailQuantity(e.target.value)} />
                    </div>

                    <div className="ProductInfoName">
                        <label htmlFor="">Return</label>
                        <select style={{ fontSize: '15px', padding: '10px' }} className="input" value={Return} onChange={(e) => setReturn(e.target.value)}>
                            <option value='' disabled selected >Select Return Police</option>
                            <option value='Exchange' >Exchange</option>
                            <option value='Replace'>Replace</option>
                            <option value='Refundable'>Refundable</option>
                        </select>
                    </div>

                    <div className="ProductInfoName" >
                        <label htmlFor="">Warranty</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" value={Warranty} onChange={(e) => setWarranty(e.target.checked === true ? '1' : "0")} />
                        </div>
                    </div>

                    <div className="ProductInfoName">
                        <label>SKU</label>
                        <input className='input' type="text" placeholder='SKU' value={SKU} onChange={(e) => setSKU(e.target.value)} />
                    </div>


                    <div className="ProductInfoName">
                        <label>Stock Status</label>
                        <select className='input' style={{ fontSize: '15px', padding: '10px' }} name="icons" id="icons" value={StockStatus} onChange={(e) => setStockStatus(e.target.value)}>
                            <option value='' disabled selected> Select Type</option>
                            <option value="In stock">In Stock</option>
                            <option value="Out of stock">Out Of Stock</option>
                            <option value="No Back Oder">No Back Order</option>

                        </select>
                    </div>


                    <button className='buttonPro' onClick={handelClick}>Update Product</button>

                </div>


            </div>
        </>
    );
}

import React, { useEffect, useState } from 'react';
import './Product.css'
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { useNavigate } from 'react-router-dom';
import { useGetProdQuery, useDeleteProductMutation } from '../../servises/apis';

import { Dna } from 'react-loader-spinner'
import { GrFormSearch } from "@react-icons/all-files/gr/GrFormSearch";
import AddRoundedIcon from '@mui/icons-material/AddRounded';






const Product = () => {
  const nav = useNavigate()

  const handelClick = () => {
    nav('/ProductInfo')

  }
  const handleRatingButton = (val) => {
    nav("/ProReview", { state: val })


  }
  const handelClickForPic = (val) => {

  }
  const { data: hhhh, isLoading, isSuccess } = useGetProdQuery()
  const [searchInput, setSearchInput] = useState('')
  const [lists, setLists] = useState([]);

  const [showing, setShowing] = useState(true)
  const [showingAdd, setShowingAdd] = useState(false)

  const listenToScrool = () => {
    let heightToHidden = 200;
    const winScrool = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScrool > heightToHidden) {
      setShowing(false)
      setShowingAdd(true)
    } else {
      setShowing(true)
      setShowingAdd(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScrool);
    return () => window.removeEventListener('scroll', listenToScrool)
  }, [])

  useEffect(() => {
    if (isSuccess) {
      setLists(hhhh)
    }
  }, [hhhh])

  useEffect(() => {
    if (searchInput !== '') {
      setLists(hhhh?.filter((item, i) => {
        return item.Name?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          item.DCategory?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          item.Status?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          (item.Price?.toString().includes(searchInput.toString())) || (item.Quantity?.toString().includes(searchInput.toString()))


      }))
    } else {
      setLists(hhhh)
    }
  }, [searchInput])

  const [deletProduct] = useDeleteProductMutation()

  //  const[search , setSearch] =  useState()

  // console.log(data, isFetching, isError, isSuccess);

  const handelSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handelEditButton = (val) => {
    nav("/EditProduct", { state: val })
  }
  const handelDeleteButton = (id) => {
    deletProduct(id)
  }
 


  return (
    <>
      <div className='Product-appp'>
        <div className="Product-App">
          <div className='Product-ProductAndButton'>
            <h1 className='Product-ProductTitle' style={{ padding: '0rem', fontFamily: 'rosemary' }}>
              Products List
            </h1>
            {
              showing && (  <button onClick={handelClick} className='Product-AddProduct'>Add Product</button>
              )
            }
          
            {
              showingAdd && (  <button style={{width:'15%' , height:'5%'}} onClick={handelClick} className='Product-AddProduct'><AddRoundedIcon /></button>
              )
            }
          
          </div>
          <div className='DivSearchAndINput' style={{ display: 'flex', marginTop: '1rem' }}>
            <span ><input placeholder='Search Products.....' onChange={handelSearch} className='NavInput' /></span>
            <span className='NavSearch'><GrFormSearch /></span>
          </div>
          <div style={{ marginTop: '1rem' }} className='Product-TableSection'>
            {isLoading ? (<Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />) :
              (lists?.map((val, key) => {
                return (

                  <div className="column">
                    <div className="card1">

                      <div className="image-container" key={key}>
                        <img onClick={()=>handelClickForPic(val.id)} src={'https://estilo.phoneo.in/public/'.concat(val.images[0]?.Path)}

                          alt="Product"
                          className="product-image"
                        />
                      </div>
                      <h6 className="product-name">Product Name : {val.Name}</h6>
                      <p className="product-category" style={{ fontSize: '15px', color: '#0da487' }}>Category : {val.DCategory}</p>
                      <p className="product-qty">Current Quantity: {val.Quantity}</p>
                      <p className="product-price">Price: {val.Price}</p>
                      <p className="product-status">Status:{val.Status}</p>
                      <div className="product-options">
                        <button className='button' ><GrEdit onClick={() => handelEditButton(val)} /></button>
                        <button className='button' onClick={() => handelDeleteButton(val.id)}><AiFillDelete /></button>
                        <button className='button' onClick={() => handleRatingButton(val.id)}>⭐️</button>
                      </div>
                    </div>
                  </div>


                )
              }))
            }

          </div>


        </div>
      </div>
    </>
  );
};

export default Product;


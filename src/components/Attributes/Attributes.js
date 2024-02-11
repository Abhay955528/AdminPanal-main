import React, { useState, useEffect } from 'react';
import './Attributes.css'
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { useNavigate } from "react-router-dom";
import { useGetAttributeQuery, useDeletAttributeMutation } from '../../servises/apis';
import { Dna } from 'react-loader-spinner';
import { GrFormSearch } from "@react-icons/all-files/gr/GrFormSearch";
import AddRoundedIcon from '@mui/icons-material/AddRounded';





const Attributes = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/AddAttribute')
  }

  const { data, isFetching, isError, isSuccess, isLoading } = useGetAttributeQuery()
  // console.log({ data, isFetching, isError, isSuccess });

  const [deletAttribute] = useDeletAttributeMutation()

 
  const [searchInput, setSearchInput] = useState('')
  const [lists, setLists] = useState([])


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
    setLists(data)
  }, [data])

  const handelSearch = (e) => {
    setSearchInput(e.target.value)
    const filteredData = data.filter(item => {
      const queryTerms = searchInput.toLowerCase().split(' ');
      return queryTerms.every(term =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(term)
        )
      );
    });
    setLists(filteredData);
  }

  return (
    <>
      {/* <Home /> */}
      {/* <div className='appp'> */}
      <div className="Attributes-App">
        <div className='Attributes-ProductAndButton'>
          <h4 className=' Attributes-ProductTitle' style={{ padding: '1.5rem' }}>
            All Attributes
          </h4>
          {showing && <button onClick={handelClick} className='Attributes-AddProduct'>Add Attribute</button>}
          {showingAdd && <button onClick={handelClick} className='Attributes-AddProduct'> Attribute</button>}

        </div>
        <div className='Attributes-SearchButton'>
          search :- <input style={{ width: '13rem' }} type='text' placeholder='search' id='input' className='Attributes_input' />
        </div>
        <div style={{ overflow: 'auto', width: '98%' }} >
          <table >
            <thead>
              <tr   >

                <th className='Attributes-th'>Name</th>
                <th className='Attributes-th'>Value</th>
                <th className='Attributes-th'>Option</th>
              </tr>
            </thead>
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
                  <tr>
                    <td key={key} className='Attributes-td'>{val.Name}</td>
                    <td className='Attributes-td' >{val.Value}</td>

                    <td >
                      <div style={{ display: 'flex', gap: '7px', fontSize: '20px' }} >
                        <span style={{ marginLeft: '25%' }}> <GrEdit color='blue' onClick={() => navigate("/EditAttribute", { state: val })} /></span>
                        <span onClick={() => deletAttribute(val.id)}> <AiFillDelete color='red' /></span>
                      </div>
                    </td>

                  </tr>
                )
              }))

            }
          </table>
        </div>
      </div>
      <div className="Attributes-SecondCard">

        <div className='Attributes-ProductAndButton'>
          {
            showing && (<button onClick={handelClick} className='Attributes-AddProduct'>Add Attribute</button>)
          }
          {
            showingAdd && (<button style={{width:'15%' , height:'5%'  }} onClick={handelClick} className='Attributes-AddProduct'><AddRoundedIcon /></button>)
          }

        </div>
        <div className='DivSearchAndINput' style={{ display: 'flex', marginTop: '1rem', width: '93vw' }}>
          <span ><input style={{ width: '82vw' }} placeholder='Search Attributes.....' onChange={handelSearch} className='NavInput' /></span>
          <span className='NavSearch'><GrFormSearch /></span>
        </div>
        <div className='SecondCardINAttribute' style={{}}>
          {isLoading ? (<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />) : (
            lists?.map((e) => {
              return (
                <>
                  <div className='SecondCardinatt' >
                    <div style={{ marginLeft: '1rem', marginTop: '1rem' }} >
                      <h1>Attribute </h1>
                      <p> Name - {e.Name}</p>
                      <p> value -{e.Value}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }} >
                      <span style={{ fontSize: '20px' }} className=' button '> <GrEdit color='blue' onClick={() => navigate("/EditAttribute", { state: e })} /></span>
                      <span style={{ fontSize: '20px' }} className=' button ' onClick={() => deletAttribute(e.id)}> <AiFillDelete color='red' /></span>
                    </div>
                  </div>
                </>
              )
            })
          )
          }
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Attributes;

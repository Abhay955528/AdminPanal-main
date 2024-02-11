import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Coupon.css'
import { useAddcouponMutation } from '../../servises/apis'
import { useNavigate } from 'react-router';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [discount, setDiscount] = useState('')
    const [status, setStatus] = useState(false)
    const formData = new FormData()
    // console.log(status);
    const [addCoupon] = useAddcouponMutation()
    formData.append('Title', title)
    formData.append('Code', code)
    formData.append('Discount', discount)
    formData.append('Status', status)

    const nav = useNavigate()



    const handelClick = () => {
        if (title !== '' && title !== null && code !== '' && code !== null && discount !== ' ' && discount !== null) {
            addCoupon(formData)
            nav('/Coupons')
        }
        else {
            alert('fill all dital')
        }

    }

    return (
        <div className='maincoupon'>
            <Box sx={{ width: '100%', typography: 'body1', marginLeft: '1%', marginTop: '13vh', zIndex: '-1', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 style={{ padding: '1.3rem', }}>Coupon</h3>
                <TabContext value={value} sx={{ zIndex: '0' }}>

                    <TabPanel value="1">
                        {' '}
                        <div className=" Generalpage">
                            {/* <h1 className='titleCouponHeader'>General</h1> */}
                            <div className='Coupon_contaner'>
                                <h6 className='titleCoupon'>Coupon Title</h6>
                                <input type="text" placeholder="Coupon Title" className='Coupon_input_field' style={{ height: '7vh' }} value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className='Coupon_contaner'>
                                <h6 className='titleCoupon'>Coupon Code</h6>
                                <input type="" placeholder="Coupon Code " className='Coupon_input_field' style={{ height: '8vh' }} value={code} onChange={(e) => setCode(e.target.value)} />
                            </div>

                            {/* <div className='Coupon_contaner'>
                                <h6 className='titleCoupon'>Start Date</h6>
                                <input type="Date" placeholder="" className='Coupon_input_field' style={{ height: '8vh', fontSize: "15px" }} />
                            </div> */}

                            {/* <div className='Coupon_contaner' >
                                <h6 className='titleCoupon'>End Date</h6>
                                <input type="Date" placeholder="" className='Coupon_input_field' style={{ height: '8vh', fontSize: "15px" }} />
                            </div> */}


                            <div className='Coupon_contaner'>
                                <h6 className='titleCoupon'>Discount</h6>
                                <input type="number" placeholder="Discount" className='Coupon_input_field' style={{ height: '8vh' }} value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            </div>

                            {/* <div className='Coupon_contaner'>
                                <h6 className='titleCoupon'>Percent</h6>
                                <select style={{ fontSize: '20px' }} className='Coupon_input_field' name="cars" id="cars">
                                    <option value='' disabled selected> Select Unit</option>
                                    <option value="volvo">Fixed</option>
                                    <option value="audi">Percent</option>
                                </select>
                            </div> */}

                            <div className='Coupon_contaner'  style={{display:'flex'}}>
                                <h6 className='titleCoupon'>Status</h6>
                                
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" value={status} onChange={(e) => setStatus(e.target.checked === true ? '1' : "0")} />
                                </div>

                                {/* <input style={{ color: 'black', marginLeft: '.5rem', width: '25px', height: '20px' }} class="Coupon_input_field" type="checkbox" role="switch" id="flexSwitchCheckChecked" value={status} onChange={(e) => setStatus(e.target.checked === true ? '1' : "0")} /> */}

                                {/* <input
                                    style={{ width: '25px', height: '20px' }}
                                    
                                    className='Coupon_input_field' type="checkbox" id="flexSwitchCheckChecked"  value={status} onChange={(e) => setStatus(e.target.value == true ? '1' : "0")} /> */}
                            </div>
                            <button onClick={handelClick} style={{ marginTop: '1rem' }} className='button' >
                                Add Coupon
                            </button>
                        </div>
                    </TabPanel>

                </TabContext>
            </Box>
        </div>
    );
}
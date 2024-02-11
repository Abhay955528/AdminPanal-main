import React,{useState , useEffect} from 'react'
import { useGetconponQuery } from '../../servises/apis';
import './ViewCoupon.css'
import { Dna } from 'react-loader-spinner'
import { useNavigate } from 'react-router';
import { useDeleteCouponMutation } from '../../servises/apis';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import {Dna} from 'react-loader-spinner/dist/loader/Dna';

function ViewCoupon() {
    const { data, isLoading, isError, isSuccess } = useGetconponQuery()
    // console.log({ data, isLoading, isError, isSuccess });

    const [showing, setShowing] = useState(true)
    const [showingAdd, setShowingAdd] = useState(false)

    const listenToScrool = () => {
        let heightToHidden = 50;
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



    const nav = useNavigate()

    const [DeleteCoupon] = useDeleteCouponMutation()

    const handelClick = () => {
        nav('/Coupon')
    }
    const handelDeleteButton = (id) => {
        DeleteCoupon(id)

        // alert('Delete succesfully')
    }

    return (
        <div className='MainContanerCoupon'>

            <h2 >Coupon</h2>
            {showing && ( <button id='couponButtton' onClick={handelClick} className='button'>Add Coupon</button>)}
            {showingAdd && ( <button id='couponButtton' style={{width:'15%' , height:'5%'}} onClick={handelClick} className='button'><AddRoundedIcon /></button>)}
           
            <br />

            {isLoading ? (<Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />) :
                (data?.map((val) => {
                    return (
                        < div className="coupon-card">
                            <h2>{val.Title}</h2>
                            <p><strong>Code:</strong> {val.Code} </p>
                            <p><strong>Status:</strong> {val.Status}</p>
                            <p><strong>Discount:</strong> {val.Discount}</p>
                            <button style={{ marginTop: '.6rem' }} onClick={() => handelDeleteButton(val.id)} className='button'>Delete Coupon</button>
                        </div>
                    )
                })
                )}
        </div >


    )
}

export default ViewCoupon
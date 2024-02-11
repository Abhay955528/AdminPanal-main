import React, { useEffect, useState } from 'react'
import { useGetProdQuery } from '../../servises/apis'
import { useLocation } from 'react-router'
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";


function ViewReviewAllProduct() {


    // const { data, isLoading, isSuccess } = useGetProdQuery()
    // console.log(data);
    const loaction = useLocation()
    const [id, setId] = useState(loaction.state)
    const [lists, setLists] = useState([])
    const [datas, setDatas] = useState([])
    console.log(datas);

    useEffect(() => {
        //  fetch('https://estilo.phoneo.in/public/api/Prod')
        //  .then((res)=>res.json())
        //  .then((e)=>setDatas(e))

        fetchData()

    }, [])

    async function fetchData() {
        try {
            const response = await fetch('https://estilo.phoneo.in/public/api/Prod');

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            return setDatas(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // You can handle errors here, such as showing an error message to the user
            // or logging the error for debugging purposes.
            throw error; // Propagate the error to the calling function if needed
        }
    }

    useEffect(() => {
        setLists(datas?.filter((e) => (e.id == id)))
    }, [datas])
    console.log(lists);

    useEffect(() => {
        setTimeout(() => {
            setLists(datas)
        }, 1000)
    }, [])



    return (
        <div>   {datas && (
            lists?.map((val, key) => {
                return (
                    <>
                        <div className="ReviewMainCardCantaner">
                            <div className="card-header">
                                <span>ID: {val.Product_id}</span>
                                <span>Customer Name:  {val.UserName}</span>
                            </div>
                            <div className="card-imageReview">
                                <img src={'https://estilo.phoneo.in/public/'.concat(val.ratingimage[0]?.Path)} width='100%' height='auto' alt="imagef" />
                            </div>
                            <div className="card-body">
                                <h2>{val.Desc}</h2>
                                <h2 className="rating"><Box
                                    sx={{
                                        width: 200,
                                        display: "flex",
                                        alignItems: "center",
                                        ml: 0,

                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={val.Star}
                                        precision={0.5}
                                    // getLabelText={getLabelText}


                                    />

                                </Box>
                                </h2>

                                <p> {val.Title}</p>
                                <h5> Customer Name:  {val.UserName}</h5>
                                {/* <div className="rating">Rating: {val.Star}</div> */}
                            </div>
                        </div>
                    </>
                );
            })
        )}</div>
    )
}

export default ViewReviewAllProduct
import React, { useState, useEffect } from "react";
import "./Review.css";
// import { useNavigate } from "react-router-dom";
import { useGetReviewQuery } from "../../servises/apis";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import { GrFormSearch } from "@react-icons/all-files/gr/GrFormSearch";

export default function App() {
  // const nav = useNavigate();

  const { data: hhhh, isLoading, isSuccess } = useGetReviewQuery();
  // console.log(data , 'j');


  // const [hover, setHover] = React.useState(-1);

  // function getLabelText(value) {
  //   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  // }

  const [searchInput, setSearchInput] = useState('')
  const [lists, setLists] = useState([])

  useEffect(() => {
    if (isSuccess) {
      setLists(hhhh)
    }
  }, [hhhh])

  useEffect(() => {
    if (searchInput !== '') {
      setLists(hhhh?.filter((item, i) => {
        return item.UserName?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          item.Desc?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          item.Title?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
          (item.Product_id?.toString().includes(searchInput.toString()))


      }))
    } else {
      setLists(hhhh)
    }
  }, [searchInput])


  const handelSearch = (e) => {
    setSearchInput(e.target.value)

  }


  return (
    <div className="mainreviewsection"

    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Product Reviews</h3>

      </div>
      <div className='DivSearchAndINput' style={{ display: 'flex', marginTop: '1rem', marginLeft: '0%' }}>
        <span ><input placeholder='Search Products.....' onChange={handelSearch} value={searchInput} className='NavInput' /></span>
        <span className='NavSearch'><GrFormSearch /></span>
      </div>
      <table style={{ marginTop: "23px" }} className="contain">
        <thead>
          <tr>
            <th> Product Id</th>
            <th>Customer Name</th>
            <th>Image</th>
            <th>Rating⭐️</th>
            <th>Title</th>
            <th>Desc</th>



          </tr>
        </thead>
        <tbody>

          {isLoading ? (
            <p>Loading</p>
          ) : (
            lists?.map((val, key) => {
              return (
                <>
                  <tr>
                    <td>{val.Product_id}</td>

                    <td>{val.UserName}</td>
                    <td><img src={'https://estilo.phoneo.in/public/'.concat(val.ratingimage[0]?.Path)} alt="imaged" /></td>

                    <td>{val.Star}</td>
                    <td>{val.Title}</td>
                    <td> {val.Desc}</td>
                  </tr>
                </>
              );
            })
          )}

        </tbody>
      </table>


      {isLoading ? (
        <p>Loading</p>
      ) : (
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
                  <h5 className="cName"> Customer Name:  {val.UserName}</h5>
                  {/* <div className="rating">Rating: {val.Star}</div> */}
                </div>
              </div>
            </>
          );
        })
      )}



    </div>
  );
}

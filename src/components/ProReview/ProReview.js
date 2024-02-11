import React, { useRef, useState } from "react";
import "./ProReview.css";
import { useAddReviewMutation } from "../../servises/apis";
import {  useLocation, useNavigate } from "react-router";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

export default function ProReview() {

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };


  const Location = useLocation();
  // console.log(Location.state)
  const [AddReview] = useAddReviewMutation();
  const nav = useNavigate();
  const imageRef = useRef();
  const [Product_id, setProduct_id] = useState(Location.state);
  const [IsShowing, setIsShowing] = useState("");
  const [image, setImage] = useState("");
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [UserName, setUserName] = useState("");
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const formData = new FormData();

  formData.append("Product_id", Product_id);
  formData.append("IsShowing", IsShowing);
  formData.append("image", image);
  formData.append("Title", Title);
  formData.append("Desc", Desc);
  formData.append("Star", value);
  formData.append("UserName", UserName);



  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  function handlOnChangeimage() {
    imageRef.current.click();
  }
  function imageUpload(e) {
    setImage(e.target.files[0]);
  }

  const handelClick = () => {
    if (Product_id !== '' && Title !== '' && Desc !== '' && value !== '' && UserName !== '') {
      AddReview(formData);
      nav("/Product Review");
    }
    else {
      alert('please fill all Detail ...')
    }
  };

  return (
    <>
      <div className="PRoREviewMain">
        <div className="doubleuser">

          <h2>Review and Rating</h2>

          <div className="ReviewInput"

          >
            <h4 style={{ fontSize: "19px", marginTop: "8px" }}>UserName</h4>
            <input
              type="text"
              style={{ height: "8vh", fontSize: "16px" }}
              placeholder="UserName"
              className="RatingReviewInput"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>


          <div style={{ display: 'none' }}><input type="text" value={Location.state}  onChange={(e)=>setProduct_id(e.target.value)}/></div>



          <div
            className="ReviewInput"
          >
            <h4 style={{ fontSize: "19px", marginTop: "8px" }}>Description</h4>
            <input
              type=""
              style={{ height: "8vh", fontSize: "16px" }}
              placeholder="Desc..."
              className="RatingReviewInput"
              value={Desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div
            className="ReviewInput"
          >
            <h4 style={{ fontSize: "19px", marginTop: "8px" }}>Review Title</h4>
            <input
              type=""
              style={{ height: "8vh", fontSize: "16px" }}
              placeholder="Review Title"
              className="RatingReviewInput"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div
            className="ReviewInput"
          >
            <h4 style={{ fontSize: "19px", marginTop: "8px" }}>Rating</h4>

            {/* <select
            className="RatingReviewInput"
            style={{ height: "8vh", fontSize: "16px" }}
            value={Star}
            onChange={(e) => setStar(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select> */}
            <div className="RatingReviewInpu" >
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  ml: 0
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>

            </div>
          </div>
          <div className="ProductInfoName"  >
            <h4
              style={{ fontSize: "19px", marginTop: "8px", marginLeft: "px" }}
            >
              Product Image
            </h4>
            <div onClick={handlOnChangeimage} >
            {image ? (
              <img
                style={{ width: "50%", height: "30vh" }}
                src={URL.createObjectURL(image)}
                alt="img"
                className="upleadedImage"
              />
            ) : (
              <div
                className="DefaulUploadIcon"
                style={{
                  backgroundColor: "inherit",
                  border: "1px dotted black",
                  width: "85vw",
                  height: "32vh",
                  borderRadius: "8px",
                  marginLeft: '-13px'
                }}
              >
                <CloudUploadOutlinedIcon style={{ color: "green" }} />
                <p style={{ fontSize: "19px", marginTop: "8px" }}>Upload Image</p>
              </div>
            )}
            <input
              className="input"
              type="file"
              ref={imageRef}
              style={{ display: "none", border: "1px solid black" }}
              onChange={imageUpload}
            />
          </div>
          </div>
          <div
           className="ProductInfoNames"
          >
            <h4 style={{ fontSize: "19px", marginTop: "-1px" }}>IsShowing</h4>
            <input
              style={{ width: '25px', height: '25px' }}
              type="Checkbox"
              placeholder=""
              className="RatingReviewInputChechBox"
              value={IsShowing}
              onChange={(e) => setIsShowing(e.target.value)}
            />
          </div>

          <div

          >
            <button
              style={{
                width: "50%",
                height: "7vh",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#0da487",
                fontSize: "21fpx",
                marginLeft: '30%',
              }}
              onClick={handelClick}
            >
              ADD Rating
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

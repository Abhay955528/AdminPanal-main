import React from 'react'
import "./Navbar.css";
// import { RiHomeLine } from "@react-icons/all-files/ri/RiHomeLine";
// import { AiOutlineShop } from "@react-icons/all-files/ai/AiOutlineShop";
// import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { MdPermMedia } from "@react-icons/all-files/md/MdPermMedia";
import { NavLink } from 'react-router-dom';
import  Package from '../../../package.json';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import CategoryIcon from '@mui/icons-material/Category';


function Navbar() {
    const arr = [
        {
          id: 1,
          icon: <DashboardIcon />,
          name: 'Dashboard'
        },
        {
          id: 2,
          icon: <ProductionQuantityLimitsIcon />,
          name: 'Product'
        },
        {
          id: 3,
          icon: <CategoryIcon />,
          name: 'Category'
        },
        {
          id: 4,
          icon: <EditAttributesIcon />,
          name: 'Attributes'
        },
    
    
        {
          id: 7,
          icon: <MdPermMedia />,
          name: 'Media'
        },
    
    
    
        {
          id: 9,
          icon: <ConfirmationNumberIcon />,
          name: 'Coupons'
        },
    
        {
          id: 9,
          icon: <ReviewsIcon />,
          name: 'Product Review'
        }
      ]
    return (
        <div className='MainNavbar'>
            <h1 className='logoTag'>Estilo Admin </h1>
           
            <div className='Mapdiv'>

                {arr.map((e) => {
                    return (
                        <NavLink  style={{textDecoration:'none' , color:'white'}} activeClassName = 'active' to={`/${e.name}`} >

                            <div className='ArrayOfList'>

                                <div  style ={{fontSize:'20px' , width:'12%' }} className='DashBoardIcon'>  {e.icon}</div>
                                <div style ={{fontSize:'16px'}} className='DashBoardname'>  {e.name}</div>
                            </div>
                          
                         </NavLink>
                    )
                })}
               <p style={{color:'black', fontSize:'13px' , marginLeft:'1rem' }}> v{Package.version}</p>  
            </div>

        </div>
    )
}

export default Navbar
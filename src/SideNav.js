import * as React from 'react';
import Box from '@mui/material/Box';
import './SideNav.css'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import Navbar from './components/Navbar/Navbar';
// import { RiHomeLine } from "@react-icons/all-files/ri/RiHomeLine";
// import { AiOutlineShop } from "@react-icons/all-files/ai/AiOutlineShop";
// import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { MdPermMedia } from "@react-icons/all-files/md/MdPermMedia";
import { NavLink } from 'react-router-dom';
import Package from '../package.json';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import CategoryIcon from '@mui/icons-material/Category';
// import { RiCoupon2Fill } from "react-icons/ri/RiCoupon2Fill";


export default function TemporaryDrawer() {

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
  const [state, setState] = React.useState({

    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'bottom' || anchor === 'bottom' ? 'auto' : 220, backgroundColor: '#0da487', padding: '1rem' }}
      // role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      {/* <Divider /> */}

      <div className='SideNav_MainNavbar' style={{ height: '100vh', border: 'none' }} >
        <h1 className='SideNav_logoTag' style={{ color: 'white' }}>Estilo Admin </h1>
        <div className='SideNav_Mapdiv' >

          {arr.map((e) => {
            return (
              <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName='active' to={`/${e.name}`} >

                <div className='ArrayOfLists' style={{ width: '95%', textAlign: 'center', marginLeft: '-.2rem', height: '8vh', marginTop: '.5rem' }}>

                  <div className='SideNav_DashBoardIcon' style={{ marginLeft: '.5rem', fontSize: '20px' , width:'15%' }} >  {e.icon}</div>
                  <div className='SideNav_DashBoardname ' style={{ marginLeft: '0rem', fontSize: '15px' }}>  {e.name}</div>
                </div>

              </NavLink>
            )
          })}
        <p style={{ color: 'black', fontSize: '13px', marginLeft: '1rem' }}> v{Package.version}</p>

        </div>


      </div>

    </Box>
  );

  return (
    <div className='menulogo'>
      <div  >
        {['☰'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button sx={{fontSize:'28px' , color:'#0da487'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>

  );
}

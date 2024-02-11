import React from 'react'
import './CenterNav.css'

import SideNav from '../../SideNav'

function CenterNav() {
  return (
    <div className='MainContainer'>
      <div className='SideNav'>
        <SideNav />
      </div>
      <div className='DivSearch'>
        <h3  style={{ color: '#0da487' }}>Admin</h3>
      </div>
      <div ><img style={{ borderRadius: '50%', marginRight: '1rem' }} width='50px' height='50px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfO37MK81JIyR1ptwqr_vYO3w4VR-iC2wqQ&usqp=CAU' alt='imaage' /></div>
      {/* <div className='DivSearchAndINput' style={{ display: 'flex' }}>
        <span ><input placeholder='Search Estilo.....' className='NavInput' /></span>
        <span className='NavSearch'><GrFormSearch /></span>
      </div> */}

      {/*<div className='GrNotification'><GrNotification  fontSize='22px' /></div>
         <div className='BiMoon'><BiMoon   fontSize='22px'/></div>
     */}

    </div >
  )
}

export default CenterNav
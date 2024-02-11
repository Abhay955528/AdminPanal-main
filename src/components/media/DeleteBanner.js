import React from 'react'
import "./DeleteBanner.css"
import { useDeleteBannerMutation } from '../../servises/apis'
function DeleteBanner() {
  const [DeleteBanner]=useDeleteBannerMutation()
  
  function DeleteALlData(){
    for(let i=10; i<=107; i++){
      DeleteBanner(i)
    }
  }
  return (
    <div className='DeleteBanner_container'>
      <button onClick={DeleteALlData}>Delete ALl Data</button>
    </div>
  )
}

export default DeleteBanner

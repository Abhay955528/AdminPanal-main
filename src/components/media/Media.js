import React , {useState , useEffect} from 'react'
import "./Media.css"
import { useGetProductsQuery } from '../../servises/apis'
import { useDeleteBannerMutation } from '../../servises/apis'
import { useNavigate } from 'react-router'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function Media() {
  const { data,  isFetching } = useGetProductsQuery()
  const [DeleteBanner]= useDeleteBannerMutation()
  const navigate = useNavigate()

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

  return (
    <>
      <div className='MediaMainContaner'>
       {showing && ( <button className="AddbtnMedia" onClick={() => navigate("/AddBanner")} >Add Banner</button>)}
       {showingAdd && ( <button className="AddbtnMedia" style={{width:'15%' , height:'5%' , textAlign:'center'}} onClick={() => navigate("/AddBanner")} ><AddRoundedIcon /></button>)}
       
        <div className='Media_container'>
          {/* <button onClick={()=>navigate("/AddBanner")}>Add Banner</button> */}
          {/* <h2 >Media</h2> */}
          {
            isFetching ? (<p>Fetching...</p>) :

              (data?.map((banner) => (
                <div className='Banner_Card' key={banner.id}>
                  <div className="Bnr_img_container">
                    {banner.Path !== null ? (<img src={`https://estilo.phoneo.in/public/${banner.Path}`} alt="img" width='100%' height='100%' />) : <p> Not avialble</p>}
                    {/* <img width='100%' height='100%' src="https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?pid=ImgDet&rs=1" alt="img" /> */}
                  </div>
                  <div className='Categroy_info'>
                    <p>Category</p>
                    <span>{banner.Category}</span>
                  </div>
                  <div className='UseIn_info'>
                    <p>UseIn</p>
                    <span>{banner.UseIn}</span>
                  </div>
                  <div className='Type_info'>
                    <p>Type</p>
                    <span>{banner.Type}</span>
                  </div>
                  <div className='Status_info'>
                    <p>Status</p>
                    <span>{banner.Status}</span>
                  </div>
                  <div className='Delete_banner_btn'>
                    {/* <button onClick={()=>navigate("/DeleteBanner")}>Delete</button> */}
                    <button className='butto' onClick={() => DeleteBanner(banner.id)}>Delete</button>
                    {/* <button  className='button' onClick={() => navigate("/UpdateBanner", { state: banner })}>Update</button> */}
                  </div>
                </div>
              )))
          }
        </div>
      </div>
    </>
  )
}

export default Media

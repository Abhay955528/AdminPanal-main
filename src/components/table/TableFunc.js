import React, { useEffect, useState } from 'react'
import "./TableFunc.css"
import { GrEdit } from "@react-icons/all-files/gr/GrEdit";
import { RiDeleteBin6Line } from "@react-icons/all-files/ri/RiDeleteBin6Line"
import { useNavigate } from 'react-router';
import { useDeleteCategoryMutation, useGetCategoryQuery } from '../../servises/apis';
import { GrFormSearch } from "@react-icons/all-files/gr/GrFormSearch";
import AddRoundedIcon from '@mui/icons-material/AddRounded';


function TableFunc() {
    const { data: hhhh, isLoading, isSuccess } = useGetCategoryQuery()
    const [DeleteCategory] = useDeleteCategoryMutation()
    const navigate = useNavigate()

    const [searchInput, setSearchInput] = useState('')
    const [lists, setLists] = useState([])

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

    const handelSearch = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        if (isSuccess) {
            setLists(hhhh)
        }
    }, [hhhh])

    useEffect(() => {
        if (searchInput !== '') {
            setLists(hhhh?.filter((item, i) => {
                return item.Category?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
                    item.DCategory?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
                    item.Slug?.split(" ").join("")?.toLowerCase().includes(searchInput.toLowerCase().split(" ").join("")) ||
                    (item.Offer?.toString().includes(searchInput.toString())) || (item.Product_id?.toString().includes(searchInput.toString()))


            }))
        } else {
            setLists(hhhh)
        }
    }, [searchInput])

    function DeleteCat(id) {
        DeleteCategory(id)
    }

    return (
        <div className='table_container'>
            <div>
                <div className='heading_and_addbtn'>
                    <h1 className='AllCategory' style={{ marginLeft: '.5rem' }}>All Category</h1>
                    {showing && (  <button className='CattegoryButton' onClick={() => navigate("/AddCategory")}> Add Category</button>)}
                    {showingAdd && (  <button  style={{width:'15%' , height:'5%'}} className='CattegoryButton' onClick={() => navigate("/AddCategory")}><AddRoundedIcon /> </button>)}
                  
                </div>
                <div className='DivSearchAndINput' style={{ display: 'flex', marginTop: '0rem' }}>
                    <label ><input placeholder='Search Products.....' value={searchInput} onChange={handelSearch} style={{ width: '83vw', marginLeft: '10px' }} className='NavInput' /></label>
                    <label style={{ marginLeft: '-10px' }} className='NavSearch'><GrFormSearch /></label>
                </div>
            </div>
            <div className='tb_container'>
                <table className='AllCategoryTable'>
                    <thead>
                        <tr>
                            <th>
                                Category Name
                            </th>
                            <th>
                                Product Id
                            </th>
                            <th>
                                Product image
                            </th>
                            <th>
                                Slug
                            </th>
                            <th>
                                DCategory
                            </th>
                            <th>
                                Offer
                            </th>
                            <th>
                                ISShowing
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? (<p>Loading..</p>) :

                                (lists?.map((Category) => (
                                    <tr>
                                        <td>
                                            {Category.Category}
                                        </td>
                                        <td>
                                            {Category.Product_id}
                                        </td>
                                        <td>
                                            <img src="https://th.bing.com/th/id/OIP.65Ls2BtJcWcGRuURIqZXqgHaPW?pid=ImgDet&rs=1" alt="img" />
                                        </td>
                                        <td>
                                            {Category.Slug}
                                        </td>
                                        <td>
                                            {Category.DCategory}
                                        </td>
                                        <td>
                                            {Category.Offer}
                                        </td>
                                        <td>
                                            {Category.ISShowing}
                                        </td>
                                        <td>
                                            {Category.Status}
                                        </td>
                                        <td>
                                            <div className='options_icons'>

                                                <GrEdit color='blue' onClick={() => navigate("/UpdateCategory", { state: Category })} />
                                                <RiDeleteBin6Line color='red' onClick={() => DeleteCat(Category.id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                                )}
                    </tbody>
                </table>
                {isLoading ? (<p>Loading..</p>) :

                    (lists?.map((Category, i) =>
                        <div className="Categorycard">
                            <div className="card-details" key={i}>
                                <h4>Name :{Category.Category}</h4>
                                <p>ID:  {Category.Product_id}</p>
                                <p>Slug: {Category.Slug}</p>
                                <p>DCategory: {Category.DCategory}</p>
                                <p>Offer: {Category.Offer}</p>
                                <p>Is Showing: {Category.ISShowing}</p>
                                <p>Status: {Category.Status}</p>
                                <div className='option-Button'>
                                    <button className='button' >  <GrEdit color='blue' onClick={() => navigate("/UpdateCategory", { state: Category })} /></button>
                                    <button className='button' >  <RiDeleteBin6Line color='red' onClick={() => DeleteCat(Category.id)} /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TableFunc

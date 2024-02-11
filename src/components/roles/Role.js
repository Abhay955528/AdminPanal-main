import React from 'react'
import "./role.css"
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import {GrEdit} from "@react-icons/all-files/gr/GrEdit";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
import allProducts from "../table/product.json"
import { useNavigate } from 'react-router';
function Role() {
    const navigate = useNavigate()
  return (
    <div className='Role_container'>
       <div className='table_container'>
            <div>
                <div className='heading_and_addbtn'>
                    <h1>Role List</h1>
                    <button onClick={()=>navigate("/AddRole")}> + Add New Role</button>
                </div>
            <div className='search_box'>
            <span>search : </span> <input type="text" placeholder='search role'/>
            </div>
           </div>
           <div className='tb_container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                           Create At
                        </th>
                        {/* <th>
                            icon
                        </th>
                        <th>
                            slug
                        </th> */}
                        <th>
                            options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((role,i) => (
                        <tr>
                            <td>
                                {i+1}
                            </td>
                            <td>
                               {/* {role.productName} */}{"role "+(i+1)}
                            </td>
                            <td>
                                 {role.date}
                            </td>
                            <td>
                               <div className='options_icons'>
                                 <AiOutlineEye />
                                 <GrEdit color='blue'/>
                                 <RiDeleteBin6Line color='red'/>
                               </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default Role

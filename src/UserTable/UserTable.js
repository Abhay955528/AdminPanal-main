import React from 'react'
import "./UserTable.css"
import { AiOutlineEye } from "@react-icons/all-files/ai/AiOutlineEye";
import {GrEdit} from "@react-icons/all-files/gr/GrEdit";
import {RiDeleteBin6Line} from "@react-icons/all-files/ri/RiDeleteBin6Line"
import allUsers from "./UserData.json"
import { useNavigate } from 'react-router';
function UserTable() {
    const navigate = useNavigate()
    return (
        <div className='table_container'>
            <div>
                <div className='heading_and_addbtn'>
                    <h1>All Users</h1>
                    <button onClick={()=>navigate("/AddUser")}> + Add New User</button>
                </div>
                <div className='search_box'>
                   <span>search: </span> <input type="text" placeholder='search product'/>
                </div>
           </div>
           <div className='tb_container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            User
                        </th>
                        <th>
                           Name
                        </th>
                        <th>
                           Phone
                        </th>
                        <th>
                           Email
                        </th>
                        <th>
                            options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => (
                        <tr>
                             <td>
                                <img src={user.user_photo} className='user-image' alt="img"/>
                            </td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                              {user.phone}
                            </td>
                           
                            <td>
                            {user.email}
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
    )
}

export default UserTable

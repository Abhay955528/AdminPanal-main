import React from 'react'
import "./AddRole.css"
function AddRole() {
    return (
        <div className='AddRole_container'>
            <div className='AddRole_heading_and_btn'>
                <h1>Create Role</h1>
            </div>
            <div className='Rolenmae_input'>
                <div>Name:</div>
                <input type='text' placeholder='Enter name'></input>
            </div>
            <div className='checkbox_container'>

                <span>permissions:</span>
                <div className="checkboxes" id='checkBoxes'>
                    <div>
                    <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                        <div>
                            <span>Roles</span>
                            <div >
                                <input type="checkbox" /><span>All</span>
                                <input type="checkbox" /><span>Index</span>
                                <input type="checkbox" /><span>Edit</span>
                                <input type="checkbox" /><span>Create</span>
                                <input type="checkbox" /><span>Destroy</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Role_save_btn'>
                  <button>Save</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddRole

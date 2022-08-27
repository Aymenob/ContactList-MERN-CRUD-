import React from 'react'
import {useLocation} from 'react-router-dom';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {UpdateUser} from "../Redux/slice"
function Update() {
    const User=useLocation().state
    const  [user, setuser] = useState({_id:User._id});console.log(user)
    const handleUpdate = (e) => { setuser({ ...user, [e.target.name]: e.target.value }) }
    const navigate=useNavigate()
    const dispatch=useDispatch()
    async function Update(e) {
       try{ 
        e.preventDefault()
        dispatch(UpdateUser(user))
        navigate("/")
    }
       catch(err){console.log(err)}
    }
    return (

        <body>
            <div style={{ marginLeft: "10cm" }} class="row p-4">

                <div class="mt-4" style={{padding:"0.75cm",marginLeft:"1.2cm",color:"purple"}} >
                    <h2>Modify your user information:</h2>
                </div>
                <div class="col-12 col-lg-4" style={{width:"15cm"}}>
                    <form>

                        <div class="mb-3">
                            <label htmlFor="Email" class="form-label">Email address</label>
                            <input type="text" defaultValue={User.Email} onChange={handleUpdate} class="form-control" name="Email" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="Lastname" class="form-label">Lastname</label>
                            <input type="text" defaultValue={User.Lastname} onChange={handleUpdate} class="form-control" name="Lastname" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="Firstname" class="form-label">Firstname</label>
                            <input type="text" defaultValue={User.Firstname} onChange={handleUpdate} class="form-control" name="Firstname" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="Age" class="form-label">Age</label>
                            <input type="text" defaultValue={User.Age} onChange={handleUpdate} class="form-control" name="Age" />
                        </div>
                        <button onClick={Update} class="btn btn-primary" style={{backgroundColor:"green",border:"none"}}>Update</button>
                    </form>
                </div>

            </div>

        </body>
    )
}

export default Update
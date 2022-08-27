import Form from '../components/form';
import Thread from '../components/thread';
import { useEffect, useState} from 'react';
import Contact from '../components/contact';
import { addUser,getUsers,deleteUser } from "../Redux/slice.js"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';


function Home() {
  const Users=useSelector(state=>state.Users.users)
  const dispatch = useDispatch()
  const axios = require("axios")
  const [contact, setcontact] = useState({})
  const handleAdd = (e) => { setcontact({ ...contact, [e.target.name]: e.target.value }) }
  const navigate=useNavigate()

  async function getContacts() {
    try {
      dispatch(getUsers()) }
      
    catch (err) { console.log(err) }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      dispatch(addUser(contact))
      setcontact({Email:"",Lastname:"",Firstname:"",Age:""})
     
    }
    catch (err) { console.log(err) }
  }

  async function handleDeleteAll(e) {
    try {
      e.preventDefault()
      await axios.delete("/RemoveCollection").then(res => console.log(res))
    }
    catch (err) { console.log(err) }
  }
  async function handleDeleteUser(id) {
  
   try{
    console.log(id)
     dispatch(deleteUser(id))}
     catch(err){console.log(err)}
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (

    <section>
      <div className="row p-4">
        <Form  contact={contact} handleAdd={handleAdd} handleSubmit={handleSubmit} handleDeleteAll={handleDeleteAll} />
        <div className="col-12 col-lg-7">
          <table className="table">
            <Thread />
            {Users.map((e) => <Contact key={e._id} handleUpdateUser={(c)=>{c.preventDefault();navigate("/Update",{state:e})}} handleDeleteUser={()=>handleDeleteUser(e._id)}  Email={e.Email} Lastname={e.Lastname} Firstname={e.Firstname} Age={e.Age} />)}
          </table>
        </div>
      </div>
    </section>

  );
}

export default Home;

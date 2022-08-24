import Form from './components/form';
import './App.css';
import Thread from './components/thread';
import { useEffect, useState } from 'react';
import Contact from './components/contact';
function App() {
  const axios = require("axios")
  const [Contacts, setContacts] = useState([])
  const [contact, setcontact] = useState({})
  const handleAdd=(e)=>{setcontact({...contact,[e.target.name]:e.target.value})};console.log(contact)
  
  async function getContacts() {
    try {
      await axios.get("http://localhost:8081").then(res => {return setContacts(res.data),console.log(res.data)})
    }
    catch (err) { console.log(err) }
  }

  async function handleSubmit(e,handleSubmit) {
    try{
      e.preventDefault();
      axios.post("http://localhost:8081/User",contact).then(res=>console.log(res))
    }
    catch(err){console.log(err)}
  }

  async function handleDeleteAll (e) {
    try {
      e.preventDefault()
      await axios.delete("/RemoveCollection").then(res=>console.log(res))
    }
    catch(err){console.log(err)}
  }

  useEffect(() => {
    getContacts()
  },[Contacts])
  
  return (

    <body>
      <div className="row p-4">
        <Form handleAdd={handleAdd} handleSubmit={handleSubmit} handleDeleteAll={handleDeleteAll} />
        <div className="col-12 col-lg-7">
          <table className="table">
            <Thread/>
            {Contacts.map((e)=><Contact Email={e.Email} Lastname={e.Lastname} Firstname={e.Firstname} Age={e.Age}/>)}
          </table>
        </div>
      </div>
    </body>

  );
}

export default App;

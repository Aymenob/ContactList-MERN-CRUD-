import React from 'react'

export default function Form({contact,handleAdd,handleSubmit,handleDeleteAll}) {
  return (
    
    <div className="col-12 col-lg-4">
        <div className="mt-4"><h2>Crud Users</h2></div>
    <form>

      <div className="mb-3">
        <label htmlFor="Email"  className="form-label">Email</label>
        <input type="text" value={contact.Email} className="form-control" name="Email" onChange={handleAdd}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Lastname" className="form-label">Lastname</label>
        <input type="text" value={contact.Lastname}  className="form-control" name="Lastname" onChange={handleAdd}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Firstname" className="form-label">Firstname</label>
        <input type="text"  value={contact.Firstname} className="form-control" name="Firstname" onChange={handleAdd}/>
      </div>
      <div className="mb-3">
        <label htmlFor="Age" className="form-label">Age</label>
        <input type="text"  value={contact.Age} className="form-control" name="Age" onChange={handleAdd}/>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">Add user</button>
      <button style={{marginLeft:"0.5cm"}} onClick={handleDeleteAll} className="btn btn-danger">Delete All Users</button>
    </form>
  </div>
  )
}

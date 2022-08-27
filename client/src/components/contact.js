import React from 'react'

export default function Contact({Email,Lastname,Firstname,Age,handleDeleteUser,handleUpdateUser}) {
  return (
    
         <tbody>
                <tr>
                  <th>{Email}</th>
                  <td>{Lastname}</td>
                  <td>{Firstname}</td>
                  <td>{Age}</td>
                  <td className="gap__actions">

                    <span onClick={handleUpdateUser} className="badge bg-info"><a href="/id" className="text-white"><i className="fas fa-edit"></i></a></span>

                    <span onClick={handleDeleteUser} className="badge bg-danger" ><i
                      className="fas fa-trash-alt"
                    ></i></span>
                  </td>
                </tr>
              </tbody>
    
  )
}

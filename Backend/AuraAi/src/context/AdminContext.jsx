import React,{createContext} from 'react'
import { useState } from 'react'
export const AdminDataContext = createContext()



const AdminContext = ({children}) => {

       const [Admin, setAdmin] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
       })

  return (
    <div>
        <AdminDataContext.Provider value={{setAdmin,Admin}}>
        {children}
        </AdminDataContext.Provider>
    </div>
  )
}

export  default AdminContext
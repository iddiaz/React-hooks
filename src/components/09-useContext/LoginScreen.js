import React, {useContext} from 'react'
import { UserContext } from './UserContext';


export const LoginScreen = () => {
   
   const { setUser } = useContext(UserContext);

 
   const loginUser = {id: '1', name: 'Ivan'}
   
   return (
      <div>
         <h1>LoginScreen</h1>
         <hr/>

         <button className="btn btn-primary" onClick={()=> setUser(loginUser)}>
            Login
         </button>
         
      </div>
   )
}
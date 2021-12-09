import React, {useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'


export const SimpleForm = () => {

   const [ formState, setFormState ] = useState({
      name: '',
      email: ''
   });

   const {name, email } = formState;

   useEffect ( ()=>{
      // console.log('hey!');
   }, []); //La dependencia va vacia, asi solo se mostrara por primera vez

   useEffect ( ()=>{
      // console.log('FormState cambio!');
   }, [formState]);

   useEffect ( ()=>{
      // console.log('FormState cambio!');
   }, [email]);

   const handleInputChange = ({target})=> {
    
      setFormState({
         ...formState,
         [target.name]: target.value

      })
   }



   return (
      <div>
         <h1>useEffect</h1>
         <hr/>

         <div className="form-group">
            <input type="text" 
               name="name"
               className="form-control" 
               placeholder="tu nombre" 
               autoComplete="off"
               value={name}
               onChange={ handleInputChange } />
         </div>

         <div className="form-group">
            <input type="text" 
               name="email"
               className="form-control" 
               placeholder="email@email.com" 
               autoComplete="off"
               value={email}
               onChange={ handleInputChange } />
         </div>


         {(name=== '123') && <Message />}
         
      </div>
   )
}

import React, { useLayoutEffect, useRef, useState } from 'react'
import {useFetch} from './../../hooks/useFetch'
import { useCounter } from './../../hooks/useCounter1';
import './layout.css';

export const Layout = () => {
   
   const {counter, increment} = useCounter(1);

   const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const { quote } = !!data && data[0]; 
  
   // console.log(data)

   const pTag = useRef();

   const [boxSize, setBoxSize] = useState({})

   useLayoutEffect(() => {
      
      setBoxSize(pTag.current.getBoundingClientRect())
     
   }, [quote]) 


   return (
      <div>

         <h1>Layout Effect </h1>
         <hr />
        

         <blockquote  className="blockquote text-end">
            <p
             className="mb-1"
             ref={pTag}
             
             >{quote}</p>
            
         </blockquote>

         <pre>
            {
            JSON.stringify(boxSize, null, 3 )
            }
         </pre>

          

         <button 
            className="btn btn-primary"
            onClick = {increment}            
         >Siguiente frase</button>    
         
      </div>
   )
}

import React from 'react'
import {useFetch} from './../../hooks/useFetch'
import { useCounter } from './../../hooks/useCounter1';
import './../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
   
   const {counter, increment} = useCounter(1);

   const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const { author, quote } = !!data && data[0]; 
  
   console.log(data)

   return (
      <div>

         <h1>BreakinBad Quotes </h1>
         <hr />
         {

            loading
            
            ? (
               <div className="alert alert-info text-center" role="alert">
                  loading...        
               </div>      

            )
            : (

               <blockquote  className="blockquote text-end">
                  <p className="mb-1">{quote}</p>
                  <footer className="blockquote-footer">{author}</footer>
               </blockquote>

            )
         }  

         <button 
            className="btn btn-primary"
            onClick = {increment}            
         >Siguiente frase</button>    
         
      </div>
   )
}

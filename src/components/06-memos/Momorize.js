import React, {useState} from 'react'
import '../02-useEffect/effects.css';
import { useCounter } from './../../hooks/useCounter1';
import { Small } from './Small';

export const Momorize = () => {

   const {counter,increment} = useCounter(10);

   const [show, setShow] = useState(true);



   return (
      <div>
         <h1>Counter: <Small value={ counter } /> </h1>
         <hr/>

         <button className="btn btn-primary" onClick={increment}>+1</button>
         
         <button
            className="btn btn-outline-primary ml-3"
            onClick={ () => setShow( !show ) }
         > show/hide {JSON.stringify(show)} </button>
         
      </div>
   )
}

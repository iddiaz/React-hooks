import React, {useState, useMemo} from 'react'
import { procesoPesado } from './../../helpers/procesoPesado';

import '../02-useEffect/effects.css';
import { useCounter } from './../../hooks/useCounter1';


export const MomoHook = () => {

   const {counter,increment} = useCounter(5000);

   const [show, setShow] = useState(true);


   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])


   return (
      <div>
         <h1>MemoHook </h1>
         <h3>Counter: <small>{counter}</small>  </h3>
         <hr/>

         {/* <p>{ procesoPesado(counter)}</p> */}
         <p>{ memoProcesoPesado }</p>

         <button className="btn btn-primary" onClick={increment}>+1</button>
         
         <button
            className="btn btn-outline-primary ml-3"
            onClick={ () => setShow( !show ) }
         > show/hide {JSON.stringify(show)} </button>
         
      </div>
   )
}

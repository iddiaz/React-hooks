import React, {useEffect, useState } from 'react'

export const Message = () => {

   const [coords, setCoords] = useState({ x:0, y:0 })
   const { x, y }= coords;


   useEffect(() => {

      const mouseMove = (e) => {
         const coords = {x: e.x, y: e.y }
         setCoords(coords);
      }

      window.addEventListener('mousemove', mouseMove )
      
      console.log('componente montado');
      return () => {
         //Fase de limpieza
         console.log('componente desmontado');
         window.removeEventListener('mouseMove', mouseMove)
      }
   }, [])
   
   
   return (
      <div>
         <h3>Eres genial!</h3>
         <p>
            x: {x} y:{y}
         </p>
         
      </div>
   )
}

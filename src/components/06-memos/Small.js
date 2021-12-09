import React from 'react'
// import React, { memo } from 'react'


//memo=> memoriza el componente para que solo se llame cuando cambie algo y no siempre.
export const Small = React.memo(({ value }) => {
// export const Small = memo(({ value }) => {

   console.log('ME volvi a llamar :(');

   return (
      <small> {value}</small>
   )
})

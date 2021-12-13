
export const todoReducer = ( state = [], action )=> {

   switch (action.type) {
      case 'add':
         const estado = [...state];
         console.log(estado);
         
         return [...state, action.payload];
   
      case 'delete':
            return state.filter( todo=> todo.id !== action.payload );

      case 'toggle':
         
      return state.map( todo => 
            (todo.id === action.payload ) 
            ? {...todo, done: !todo.done } 
            : todo
            )

      case 'toggle-extend':
         
         return state.map( todo => {
            
            if(todo.id === action.payload ) {
              return {
               ...todo,
               done: !todo.done
               }
               
            } else {
               return todo;
            }
 
         })  

      default:
         return state;


      
   }
}
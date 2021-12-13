import React, {useReducer, useEffect} from 'react'
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm'

import './style.css';



// const initialState = [{
//    id: new Date().getTime(),
//    desc: 'Una descripción de la tarea',
//    done: false
// }]

const init = ()=>{
   
   // return [{      
      //       id: new Date().getTime(),
      //       desc: 'Una descripción de la tarea',
      //       done: false
      
      // }]

      return JSON.parse( localStorage.getItem('todos') ) || [];
}


export const TodoApp = () => {
   
   const [ todos, dispatch ] = useReducer(todoReducer, [], init );
   
   const [{description}, hadleInputChange, reset ] = useForm({
      description: ''
   })

   console.log(description)

   useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])

   const handleDelete = (todoId) => {
      console.log(todoId)
      // crear la accion
      const action = {
         type: 'delete',
         payload: todoId
      }
      // hacer dispatch
      dispatch( action );
   }

   const handleToggle = (todoId) => {
      console.log('todoId', todoId)
      dispatch({
         type: 'toggle',
         payload: todoId
      })

   }


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('nueva tarea');

      if(description.trim().length <= 1 ){
         return;
      }
      
      const newTodo = {
         id: new Date().getTime(),
         desc: description,
         done: false
      }

      const action = {
         type: 'add',
         payload: newTodo,
      }
      dispatch( action );
      reset();
   }

      console.log(todos);
      
   return (
     <div>
       <h1>TodoApp ({todos.length}) </h1>
       <hr />

       <div className="row">
         <div className="col-7">
           <ul className="list-group list-group-flush">
               {
                  todos.map((todo, i) => (
                     <li key={todo.id} className="list-group-item">
                     <p
                        onClick={ () => handleToggle(todo.id) }
                        className={ `${ todo.done && 'complete' }` }
                     >
                        {i + 1}. {todo.desc}
                     </p>
                     <button
                        onClick={ ()=>handleDelete(todo.id) }
                        className="btn btn-danger">Borrar</button>
                     </li>
                  ))
               }
           </ul>
         </div>
         <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit={ handleSubmit } >
               <input 
                  type="text"
                  name="description"
                  placeholder="Aprender..."
                  autoComplete="off"
                  className="form-control"
                  onChange={ hadleInputChange }
                  value={description}
                />
                <button 
                  type="submit"
                  className="btn btn-outline-primary mt-1 block"
               >Agregar</button>
            </form>
         </div>
       </div>
     </div>
   );
}

import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from './../../fixtures/demoTodos';



describe('pruebas en todoReducer', () => {

   test('Debe retornar el estado por defecto', ()=> {
      
      const state = todoReducer( demoTodos, {});

      expect(state).toEqual(demoTodos)

   })

   test('Debe agregar un TODO', ()=> {

      const newTodo = {
         i: 3,
         desc: 'express',
         done:false
      };

      const action = {
         type: 'add',
         payload: newTodo
      }
      
      const state = todoReducer( demoTodos, action );

      expect(state).toEqual([...demoTodos, newTodo]);

   })


   test('Debe borrar un TODO', ()=> {
      

      const action = {
         type: 'delete',
         payload: 1
      }

      const state = todoReducer( demoTodos, action );

      expect( state.length).toBe(1);
      expect( state ).toEqual([ demoTodos[1] ]);


   })


   test('Debe hacer el toggle del TODO', ()=> {
      
      const action = {
         type: 'toggle',
         payload: 1
      }

      const state = todoReducer( demoTodos, action );
      expect( state[0].done ).toBe(true);
      expect( state[1] ).toEqual( demoTodos[1] )

   })  

})   
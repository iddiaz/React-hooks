
import { shallow, mount } from 'enzyme';
import { React } from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from './../../fixtures/demoTodos';
import {act} from '@testing-library/react';


describe('Pruebas en <TodoApp/>', ()=>{

      const wrapper = shallow( <TodoApp /> );

      Storage.prototype.setItem = jest.fn(()=>{});


      test('Debe mostrarse correctamente', ()=>{
         expect( wrapper).toMatchSnapshot()
      });


      test('Debe agregar un TODO', ()=>{
            //mount prueba la aplicacion en contexto
         const wrapper = mount(<TodoApp />)

         act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );            
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );            
         })

         expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
         expect(localStorage.setItem ).toHaveBeenCalledTimes(2);


      })   


      test('Debe eliminar un TODO', ()=>{
            
            const wrapper = shallow( <TodoApp /> );

     
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );            
            wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );            
                        
      

         expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)')
 


      })    
      
      



}) 
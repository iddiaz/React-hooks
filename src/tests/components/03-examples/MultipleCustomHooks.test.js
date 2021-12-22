import React from 'react'
import {shallow} from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from './../../../hooks/useCounter';


//Cuando demanda esta ruta para el archivo jest utiliza el mock  
jest.mock('../../../hooks/useFetch');
jest.mock('./../../../hooks/useCounter');

describe('Pruebas de <multipleCustomHooks/>', ()=>{

   useCounter.mockReturnValue({
      counter: 1,
      increment: ()=>{}
   }) 



   test('Debe mostrarse correctamente', () => {

      useFetch.mockReturnValue({
         data: null,
         loading:true,
         error: null  
      })

      const wrapper = shallow( <MultipleCustomHooks />)
      expect(wrapper).toMatchSnapshot();
   })

   test('Debe mostrar la info', () => {
      
      useFetch.mockReturnValue({
         data: [{
            author:'ivan',
            quote:'hola',
         }],
         loading:false,
         error: null 
      })

      const wrapper = shallow( <MultipleCustomHooks />);
      console.log(wrapper.html())

      expect( wrapper.find('.alert').exists() ).toBe(false);
      expect( wrapper.find('footer').text().trim() ).toBe('ivan');
      expect( wrapper.find('.mb-1').text().trim() ).toBe('hola'); 
 
   })
   
})
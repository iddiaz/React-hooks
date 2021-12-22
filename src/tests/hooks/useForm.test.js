import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './../../hooks/useForm';

describe('pruebas en useForm', ()=>{
   const initialForm = {
      name: 'Ivan',
      email: 'correo@ivan.com'
   }

   test('Debe regresar un formulario por defecto', ()=>{
      const { result } = renderHook(()=>useForm(initialForm));
      const [formValues, handleInputChange, reset ] = result.current;

      expect(formValues).toEqual(initialForm);
      expect(typeof handleInputChange ).toBe('function');
      expect(typeof reset ).toBe('function');

   })

   test('Debe cambiar el valor del formulario', ()=>{
      const { result } = renderHook(()=>useForm(initialForm));
      const [ , handleInputChange ] = result.current;

      act(()=>{
         handleInputChange({
            target: {
               name:'name',
               value: 'Pepe' 
            }
         });
      });

      const [formValues] = result.current;
      console.log(formValues)

      expect(formValues).toEqual({...initialForm, name:'Pepe'});

   })

   test('Debe reestablecer el formulario con RESET', ()=>{

      const { result } = renderHook(()=>useForm(initialForm));
      const [ , handleInputChange, reset ] = result.current;

      act(()=>{
         
         handleInputChange({
            target: {
               name:'name',
               value: 'Pepe' 
            }
         });

         reset();

      });

      const [formValues] = result.current;
      console.log(formValues)

      expect(formValues).toEqual(initialForm);





   })


})
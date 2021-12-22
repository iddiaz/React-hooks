import { React } from 'react';
import { shallow, mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from './../../../components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen/>', ()=>{

   const setUser = jest.fn();

   const wrapper = mount(
      //hay qe definir el userCOntext por que el componente esta dentro de un contexto
      <UserContext.Provider value={{
         setUser
      }}>
         <LoginScreen /> 
      </UserContext.Provider>
      );

   test('Debe mostrarse correctemente ', () => {

      expect(wrapper).toMatchSnapshot();
      
   })


   test('Debe ejecutar setUser con el arguento esperado', () => {

      wrapper.find('button').prop('onClick')();

      expect(setUser).toHaveBeenCalledWith({
         id: '1', 
         name: 'Ivan'
      });
      
   })


   
})
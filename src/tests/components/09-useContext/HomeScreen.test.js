import { React } from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from './../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas componente <HomeScreen />', ()=>{
   
   const user = {
      name: 'Ivan',
      email: 'email@email.com'
   }
   const wrapper = mount(
      <UserContext.Provider value={{
         user
      }}>
         <HomeScreen /> 
      </UserContext.Provider>
      );

   test('Debe mostrarse correctamente', () => {

      expect( wrapper).toMatchSnapshot();

   }) 


})
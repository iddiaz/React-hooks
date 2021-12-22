import { React } from 'react';
import { shallow } from 'enzyme';
import { HookApp } from './../HooksApp';


describe('Pruebas HooksApp', () =>{
   test('Debe mostrearse correctamente', ()=>{
      const wrapper = shallow( <HookApp />)
      expect( wrapper ).toMatchSnapshot();
   })
}) 
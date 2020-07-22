import { shallow, mount, configure, ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import { NavbarConnected } from '../navigation/Navbar';
import App from '../../App';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/store';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IBasicState } from '../../reducers/basicReducer'

configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
let store;

const initialBasicState: IBasicState = {
  email: '',
  username: '',
};
const mockStore = configureStore();

beforeEach(() => {
  store = mockStore(initialBasicState);
  wrapper = mount(<Provider store={store}>
  <NavbarConnected/>
  </Provider>);
})

describe('Navbar Component', () => {
  it('renders', () => {
    expect(wrapper.find('h2').html()).toMatch(/Kunligi/)
  })

  xit('renders Sign In button', () => {
    expect(wrapper.find('NavLink').text()).toEqual('Sign In')
  })

  xit('snapshot matches', () => {
    const wrapper = shallow(<NavbarConnected/>)
    expect(wrapper).toMatchSnapshot()
  })
})
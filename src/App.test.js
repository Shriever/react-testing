import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should have the `th` "items"', () => {
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });

  it('should have a `button` element', () => {
    expect(wrapper.containsMatchingElement(<button>Add Item</button>)).toBe(
      true
    );
  });

  it('should have an `input` element', () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });
  describe('the user populates the input', () => {
    const item = 'Best text';
    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: { value: item },
      });
    });
    it('should change input value', () => {
      const input = wrapper.find('input').first();
      expect(input.props().value).toEqual(item);
    });
    it('should enable `button`', () => {
      const button = wrapper.find('button', () => {
        expect(button.props().disabled).toBe(false);
      });
      describe('and then clears the input', () => {});
      describe('and then submits', () => {});
    });
  });
});

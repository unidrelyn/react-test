import React from 'react';
import App from './App';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import store from './redux/store';

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />)
    </Provider>
  );
});

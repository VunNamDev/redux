import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'mobx-react';
import TabStore from '../mobx/TabStore';
const store = new TabStore();

export default class Tab extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

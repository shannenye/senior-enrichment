'use strict'
import React, { Component } from 'react'
import ReactDom, {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, BrowserRouter} from 'react-router-dom';

import store from './store'
import Main from './components/AppComponent'

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)


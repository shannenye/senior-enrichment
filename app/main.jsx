'use strict'
import React, { Component } from 'react'
import ReactDom, {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, BrowserRouter} from 'react-router-dom';

import store from './store'
import Main from './components/AppComponent'
// import Root from './components/Root'
// ReactDom.render(
//   <Provider store={store}>
//     <Root />
//   </Provider>,
//   document.getElementById('main')
// );



// render(
//   <Provider store={store}>
//   <div>
//     <h3 id='school-name'>Spacestack Academy</h3>

//     <CampusList />
//     <StudentList />
//     </div>
//   </Provider>,
//   document.getElementById('main')
// );

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)


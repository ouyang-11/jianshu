import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Writing from './pages/writing';
import Detail from './pages/detail';
import {GlobalStyled} from './style.js';
import store from './store';

class App extends Component {
render() {
  return (
    <Fragment>
       <Provider store={store}>
	        <BrowserRouter>
	          <div>
               <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
	            <Route path='/writing' exact component={Writing}></Route>
	            <Route path='/detail/:id' exact component={Detail}></Route>
	          </div>
	        </BrowserRouter>

       </Provider>

       <GlobalStyled />
    </Fragment>
  );
}
}

export default App;

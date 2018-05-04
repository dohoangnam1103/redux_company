import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/Login';
import SignUp from './component/Signup';
import InforUser from './component/inforUser';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import appReducers from './reducers/index';
import rootSaga from './sagas/rootSaga';
import * as firebase from 'firebase';
import config from './fireBase/config';

import {
        BrowserRouter,
        Route,
        Link
    } from 'react-router-dom';


    const sagaMiddleware = createSagaMiddleware();

    



// firebaseApp.auth().createUserWithEmailAndPassword('abc@gmail.com','123456789');





const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware);


// store.dispatch((dispatch) => {
//     dispatch({type: 'FETCH_DATA_START'});
//     fetch('https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo').then(response => response.json()).then(data => {console.log('123');});
    
// })




export const firebaseApp = firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        let email;
        email =  user.email;
        store.dispatch({type: 'LOGIN_USER', email: email});

    } else {
        console.log('no user login');
      // No user is signed in.
    }
  });
  



console.log(firebaseApp.auth());

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}> 
            <div className='wrap-link'>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

                <InforUser></InforUser>



                <Route exact path='/' component={App} />
                <Route path='/login'  component={Login} />
                <Route path='/signup' component={SignUp} />
            </div>
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));

sagaMiddleware.run(rootSaga);
registerServiceWorker();

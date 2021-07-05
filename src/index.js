import react from 'react';
import reactDom from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './reducer/rootReducer';

const store= createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

reactDom.render(
  <>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </>,document.getElementById("root")
)
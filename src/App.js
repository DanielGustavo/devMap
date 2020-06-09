import React from 'react';
import { Provider } from 'react-redux';
import Main from './pages/main';
import GlobalStyle from './styles/global';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <div className="app">
      <Main />
    </div>
  </Provider>
);

export default App;

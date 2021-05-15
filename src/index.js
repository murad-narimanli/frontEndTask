import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import App from './components/App';
import store from "./redux/store";
import { Provider } from 'react-redux';
import history from './const/history';
import { Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}><App /></Router>
    </Provider>,
  document.getElementById('root')
);


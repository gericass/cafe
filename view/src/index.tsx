import * as History from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {HOME_PATH, LOGIN_PATH} from './constants/Paths';
import Home from './home/Home';
import Login from './login/Login';
import registerServiceWorker from './registerServiceWorker';
import SearchReducer from "./search/SearchReducer";

const history = History.createHashHistory();
const middleware = [applyMiddleware(routerMiddleware(history))];

const rootReducer = combineReducers({
    search: SearchReducer
});

const store = createStore(
    combineReducers({
        rootReducer,
        router: routerReducer,
    }),
    ...middleware
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact={true} path={HOME_PATH} component={Home}/>
                <Route exact={true} path={LOGIN_PATH} component={Login}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

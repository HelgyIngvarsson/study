import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom'
import {BrowserRouter, Route } from 'react-router-dom'
import {Redirect} from 'react-router'
import './helpers/vendor'
import HomeContainer from "./containers/PlayerContainer";
import {Store} from './Store'

render(
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' render={()=>{return <Redirect to='player' />}} />
                <Route  path='/player' component={HomeContainer} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import MainPage from '../components/pages/main'

export default props => (
    <Router>
        <Route path="/main" component={MainPage}></Route>
        <Redirect from="*" to="/main"></Redirect>
    </Router>
)
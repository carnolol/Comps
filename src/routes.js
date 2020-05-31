import {Route, Switch} from 'react-router-dom'
import React from 'react'
import Component1 from './components/compnent1'
import App from './App'
import compnent1 from './components/compnent1'

export default <Switch>
    <Route exact path ='/' component={App}/>
    <Route path = '/comp1'  component={compnent1}/>
</Switch>
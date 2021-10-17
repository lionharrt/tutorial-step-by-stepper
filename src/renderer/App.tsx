import './App.global.css'

import React from 'react'
import { MemoryRouter as Router, Route,Switch } from 'react-router-dom'

import Home from './Home'
import Stepper from './Stepper'



export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/stepper" component={Stepper} />
			</Switch>
		</Router>
	)
}

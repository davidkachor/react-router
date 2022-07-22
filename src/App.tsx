import React, { useState } from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import Page404 from './pages/Page404/Page404'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('IS_LOGGED') === '1'
	)
	const loginHandler = () => {
		setIsLoggedIn(true)
		localStorage.setItem('IS_LOGGED', '1')
	}
	const logoutHandler = () => {
		setIsLoggedIn(false)
		localStorage.setItem('IS_LOGGED', '0')
	}
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route
						path="/"
						exact={true}
						component={() =>
							isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="login" />
						}
					/>
					<Route
						path="/login"
						component={() =>
							!isLoggedIn ? (
								<Login onLogIn={loginHandler} />
							) : (
								<Redirect to="/profile" />
							)
						}
					/>
					<Route
						path="/profile"
						component={() =>
							isLoggedIn ? (
								<Homepage onLogOut={logoutHandler} />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route path="*" component={Page404} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
				<Routes>
					<Route
						path="/"
						element={
							isLoggedIn ? <Navigate to="/profile" /> : <Navigate to="login" />
						}
					/>
					<Route
						path="/login"
						element={
							!isLoggedIn ? (
								<Login onLogIn={loginHandler} />
							) : (
								<Navigate to="/profile" />
							)
						}
					/>
					<Route
						path="/profile"
						element={
							isLoggedIn ? (
								<Homepage onLogOut={logoutHandler} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

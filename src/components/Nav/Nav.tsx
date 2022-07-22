import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import React from 'react'

const NavStyled = styled.nav`
	background-color: purple;
	display: flex;
	padding: 10px;
	justify-content: space-between;
	align-items: center;
`
const Header = styled.h1`
	color: white;
`
const Button = styled.button`
	padding: 8px;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
	background-color: white;
`

const Nav: React.FC<{ onLogOut: () => void }> = props => {
	const history = useHistory()

	const logoutHandler = () => {
		props.onLogOut()
		history.push('/login')
	}

	return (
		<NavStyled>
			<Header>Homepage!</Header>
			<Button onClick={logoutHandler}>Log Out</Button>
		</NavStyled>
	)
}

export default Nav

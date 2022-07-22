import React, { FormEvent, useId, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 30px;
	border-radius: 10px;
`
const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`
const Input = styled.input`
	border-radius: 10px;
	border: grey solid 1px;
	height: 15px;
	padding: 5px;
`
const Submit = styled.button.attrs({
	type: 'submit',
})`
	border-radius: 15px;
	background-color: purple;
	font-weight: bold;
	color: white;
	border: none;
	height: 35px;
	width: 80px;
	cursor: pointer;
`

const Login: React.FC<{ onLogIn: () => void }> = props => {
	const id = useId()
	const history = useHistory()
	const [inputs, setInputs] = useState({ email: '', password: '' })
	console.log('login')

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		props.onLogIn()
		history.push('/profile')
	}

	return (
		<Container>
			<Form onSubmit={submitHandler}>
				<FormControl>
					<label htmlFor={`${id}-email`}>Email</label>
					<Input
						id={`${id}-email`}
						type={'email'}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setInputs(prev => ({ ...prev, email: event.target.value }))
						}
					/>
				</FormControl>
				<FormControl>
					<label htmlFor={`${id}-password`}>Password</label>
					<Input
						id={`${id}-password`}
						type={'password'}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setInputs(prev => ({ ...prev, password: event.target.value }))
						}
					/>
				</FormControl>
				<Submit>Login</Submit>
			</Form>
		</Container>
	)
}

export default Login

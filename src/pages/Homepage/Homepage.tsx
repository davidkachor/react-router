import Nav from '../../components/Nav/Nav'
import styled from 'styled-components'
import Main from '../../components/Main/Main'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Homepage: React.FC<{ onLogOut: () => void }> = props => {
	console.log('profile')

	return (
		<Container>
			<Nav onLogOut={props.onLogOut} />
			<Main />
		</Container>
	)
}

export default Homepage

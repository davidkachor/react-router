import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
`

const Message = styled.p`
	background-color: white;
	padding: 15px;
	border-radius: 8px;
	font-weight: bold;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	
	& span {
		text-align: center;
		font-size: 27px;
	}
`

const Page404 = () => {
    return (
        <Container>
            <Message><span>404</span> This page does not exist</Message>
        </Container>
    )
}

export default Page404

import styled from 'styled-components'

export const MainCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 20px;
	box-shadow: 0px 2px 10px 0px rgba(170, 170, 170, 1);
	margin: auto;
	width: 20rem;
	height: 40rem;
	padding: 10px;
`
export const SignUpTitle = styled.div`
	text-align: center;
	font-size: 250%;
	padding-bottom: 5%;
	text-transform: uppercase;
`
export const CardLayout = styled.div`
	padding: 5%;
`
export const SignUpBar = styled.div`
	width: 100%;
	height: 2.5rem;
	font-size: 1.5rem;
	border: 1px solid #aaa;
	border-radius: 20px;
	background-color: white;
	cursor: text;
	&:hover {
		box-shadow: 0px 2px 4px 0px rgba(170, 170, 170, 1);
	}
`
export const SignUpChec = styled.span`
	padding-top: 10%;
	margin: auto;
`
export const SignUpButtonDiv = styled.div`
	padding-left: 8%;
	padding-top: 3%;
`
export const SignUpButtonLeft = styled.button`
	margin-left: 0%;
	margin-right: 2%;
	margin-bottom: 6%;
	width: 45%;
	height: 1.8rem;
	font-size: 1rem;
	border: 1px solid #aaa;
	border-radius: 20px;
	background-color: royalblue;
	text-align: center;
	&:hover {
		box-shadow: 0px 2px 4px 0px rgba(170, 170, 170, 1);
	}
`
export const SignUpButtonRight = styled.button`
	margin-left: 2%;
	margin-bottom: 6%;
	width: 45%;
	height: 1.8rem;
	font-size: 1rem;
	border: 1px solid #aaa;
	border-radius: 20px;
	background-color: red;
	text-align: center;
	&:hover {
		box-shadow: 0px 2px 4px 0px rgba(170, 170, 170, 1);
	}
`
export const SignUpHref = styled.a`
	padding-left: 2%;
	padding-bottom: 0%;
	text-decoration: none;
	cursor: pointer;
`
export const StyledH1BlueSignUp = styled.span`
	font-size: 42px;
	font-weight: normal;
	font-family: 'Montserrat', sans-serif;
	color: #039dff;
`

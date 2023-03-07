import styled from 'styled-components'

export const StyledIconMenu = styled.div`
  display: flex;
  border: 0px solid #999;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0);
	color: black;
	margin: auto;
	padding: auto;
	&:hover{
		color: royalblue;
	}
  
`
export const StyledNavbar = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	height: 5rem;
	background-color: rgba(0, 0, 0, 0);
`

export const NavButton = styled.button`
	border: 0px solid #999;
	border-radius: 10px;
	height: 2rem;
	margin: auto 0.2rem;
	padding: auto;
	margin-right: 0.4%;
	background-color: rgba(0, 0, 0, 0);
	color: black;
	font-weight: bold;
	font-size: 1.25rem;
	text-transform: uppercase;
	&:hover{
		color: royalblue;
	}
`

export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	height: 90vh;
	justify-content: center;
	align-items: center;
`
export const StyledH1Blue = styled.span`
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	color: royalblue;
`
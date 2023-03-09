import styled from 'styled-components'
export const ImageEuro = styled.img`
	width: 250px;
	z-index: 1;
`
export const StyledNavbar = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	height: 5rem;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 1;
`
export const StyledNavbarFirst = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	height: 5rem;
	margin: auto;
	padding-right: 15%;
	background-color: rgb(0, 0, 0);
	z-index: 1;
`
export const NavButtonHello = styled.button`
	display: block;
	text-align: start;
	border: 0px solid #999;
	border-radius: 10px;
	margin-bottom: 10%;
	margin-left: 10%;
	background-color: rgba(0, 0, 0, 0);
	color: #fff;
	font-size: 1rem;
	height: 80%;
	width: 60%;
	z-index: 1;
	transition: filter 0.4s;
	&:hover {
		filter: brightness(1.2);
	}
`
export const NavButton = styled.button`
	border: 0px solid #999;
	border-radius: 10px;
	margin: auto 0.2rem;
	margin-right: 0.4%;
	background-color: rgba(0, 0, 0, 0);
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	text-transform: uppercase;
	height: 80%;
	width: 7%;
	z-index: 1;
	transition: 0.5s;
	transition: filter 0.4s;
	transition: background-color 0.4s;
	&:hover {
		background-color: tomato;
		filter: brightness(1.2);
	}
`
export const NavButtonFirst = styled.button`
	border: 0px solid #999;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0);
	color: #fff;
	font-weight: bold;
	font-size: 0.8rem;
	text-transform: uppercase;
	height: 80%;
	z-index: 1;
	cursor: pointer;
	transition: filter;
	&:hover{
		filter: brightness(1.2);
	}
`
export const NavRight = styled.span`
	border: 0px solid #999;
	border-radius: 10px;
	margin: auto 0.2rem;
	margin-right: 0.4%;
	background-color: rgba(0, 0, 0, 0);
	color: #fff;
	font-weight: bold;
	font-size: 1rem;
	text-transform: uppercase;
	height: 80%;
	width: 7%;
	z-index: 1;
`
export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	height: 90vh;
	justify-content: center;
	align-items: center;
	z-index: 1;
`
export const StyledH1Blue = styled.span`
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	color: royalblue;
	z-index: 1;
`
export const NavButtonLogo = styled.button`
	border: 0px solid #999;
	border-radius: 10px;
	margin: auto 0.2rem;
	margin-right: 30%;
	background-color: rgba(0, 0, 0, 0);
	color: black;
	font-weight: bold;
	font-size: 1rem;
	text-transform: uppercase;
	height: 80%;
	width: 7%;
	z-index: 1;
`

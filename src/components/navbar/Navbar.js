import { useHistory } from 'react-router-dom'
import { NavButton, StyledMain, StyledNavbar, StyledNavbarFirst, ImageEuro } from './Navbar.styled'

const Navbar = props => {
	const history = useHistory()
	// const loginHandler = () => history.push('/login')
	// const signUpHandler = () => history.push('/signup')

	return (
		<>
			<StyledNavbarFirst></StyledNavbarFirst>
			<StyledNavbar>
				<NavButton>
					
				</NavButton>
				<NavButton>Home</NavButton>
				<NavButton>O nas</NavButton>
				<NavButton>co robimy</NavButton>
				<NavButton>jak to działa</NavButton>
				<NavButton>Dlaczego powinieneś</NavButton>
				<NavButton>Kontakt</NavButton>
			</StyledNavbar>
			<StyledMain>{props.children}</StyledMain>
		</>
	)
}

export default Navbar

import { useHistory } from 'react-router-dom'
import { NavButton, StyledMain, StyledNavbar, StyledH1Blue, StyledIconMenu } from './Navbar.styled'
import { IconMenu2 } from '@tabler/icons-react'
const Navbar = props => {
	const history = useHistory()
	// const loginHandler = () => history.push('/login')
	// const signUpHandler = () => history.push('/signup')
	return (
		<>
			<StyledNavbar>
				<NavButton>
					
				</NavButton>
				<NavButton>
					
				</NavButton>
				<NavButton>
					<StyledIconMenu>
					</StyledIconMenu>
				</NavButton>
			</StyledNavbar>
			<StyledMain>{props.children}</StyledMain>
		</>
	)
}

export default Navbar

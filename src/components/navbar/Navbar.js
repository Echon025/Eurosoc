import { useHistory } from 'react-router-dom'
import { NavButton, StyledMain, StyledNavbar, StyledH1Blue, StyledIconMenu } from './Navbar.styled'
import { IconMenu2 } from '@tabler/icons-react'
const Navbar = props => {
	const history = useHistory()
	const loginHandler = () => history.push('/login')
	const signUpHandler = () => history.push('/signup')
	return (
		<>
			<StyledNavbar>
				<NavButton onClick={loginHandler}>
					Log<StyledH1Blue>in</StyledH1Blue>
				</NavButton>
				<NavButton onClick={signUpHandler}>
					Sign<StyledH1Blue> up</StyledH1Blue>
				</NavButton>
				<NavButton>
					<StyledIconMenu>
						<IconMenu2 />
					</StyledIconMenu>
				</NavButton>
			</StyledNavbar>
			<StyledMain>{props.children}</StyledMain>
		</>
	)
}

export default Navbar

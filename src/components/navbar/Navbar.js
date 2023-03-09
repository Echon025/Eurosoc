import { useHistory } from 'react-router-dom'
import {
	IconBrandLinkedin,
	IconBrandTwitterFilled,
	IconBrandFacebookFilled,
	IconBrandInstagram,
} from '@tabler/icons-react'
import {
	NavButton,
	StyledMain,
	StyledNavbar,
	StyledNavbarFirst,
	ImageEuro,
	NavButtonLogo,
	NavRight,
	NavButtonFirst,
	NavButtonHello,
} from './Navbar.styled'

const Navbar = props => {
	const history = useHistory()
	// const loginHandler = () => history.push('/login')
	// const signUpHandler = () => history.push('/signup')

	return (
		<>
			<StyledNavbarFirst>
				<NavButtonHello>+48 799 220 330 - hello at eruosoc.eu</NavButtonHello>
				<NavButtonFirst>
					{' '}
					<IconBrandLinkedin></IconBrandLinkedin>{' '}
				</NavButtonFirst>
				<NavButtonFirst>
					{' '}
					<IconBrandTwitterFilled></IconBrandTwitterFilled>{' '}
				</NavButtonFirst>
				<NavButtonFirst>
					{' '}
					<IconBrandFacebookFilled></IconBrandFacebookFilled>{' '}
				</NavButtonFirst>
				<NavButtonFirst>
					{' '}
					<IconBrandInstagram></IconBrandInstagram>{' '}
				</NavButtonFirst>
				<NavRight></NavRight>
				<NavButtonFirst>PL</NavButtonFirst>
				<NavButtonFirst>EN</NavButtonFirst>
				<NavRight></NavRight>
			</StyledNavbarFirst>
			<StyledNavbar>
				<NavButtonLogo>
					<ImageEuro src='images/logo-eurosoc-horizontal-totalwhite-noslogan-middle.png' alt='Logo Eurosoc' />
				</NavButtonLogo>
				<NavButton>Home</NavButton>
				<NavButton>O nas</NavButton>
				<NavButton>co robimy</NavButton>
				<NavButton>jak to działa</NavButton>
				<NavButton>Dlaczego powinieneś</NavButton>
				<NavButton>Kontakt</NavButton>
				<NavRight></NavRight>
			</StyledNavbar>
			<StyledMain>{props.children}</StyledMain>
		</>
	)
}

export default Navbar

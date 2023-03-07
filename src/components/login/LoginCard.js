import Card from '../ui/Card'
import {
	MainCard,
	LoginTitle,
	CardLayout,
	LoginBar,
	LoginButtonLeft,
	LoginButtonRight,
	LoginButtonDiv,
	LoginChec,
	LoginHref,
	StyledH1BlueLogin,
} from './LoginCard.styled'
import { useHistory } from 'react-router-dom'
const LoginCard = props => {
	const history = useHistory()
	const mainnHandler = () => history.push('/main')
	const signUpnHandler = () => history.push('/signup')
	return (
		<Card>
			<MainCard>
				<LoginTitle>
					Log<StyledH1BlueLogin>in</StyledH1BlueLogin>
				</LoginTitle>
				<CardLayout>Email address:</CardLayout>
				<LoginBar></LoginBar>
				<CardLayout>Password:</CardLayout>
				<LoginBar></LoginBar>
				<CardLayout>
					<LoginChec>
						<input type='checkbox' /> Remember me
					</LoginChec>
				</CardLayout>
				<LoginButtonDiv>
					<LoginButtonLeft>Sign in</LoginButtonLeft>
					<LoginButtonRight onClick={mainnHandler}>Cancel</LoginButtonRight>
				</LoginButtonDiv>
				<LoginHref onClick={signUpnHandler}>New around here? Sign up.</LoginHref>
				<LoginHref>Forgot password?</LoginHref>
			</MainCard>
		</Card>
	)
}

export default LoginCard

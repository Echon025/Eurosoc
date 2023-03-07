import Card from '../ui/Card'
import {
	MainCard,
	SignUpTitle,
	CardLayout,
	SignUpBar,
	SignUpButtonLeft,
	SignUpButtonRight,
	SignUpButtonDiv,
	SignUpChec,
	SignUpHref,
	StyledH1BlueSignUp,
} from './SignUpCard.styled'
import { useHistory } from 'react-router-dom'
const SignUpCard = props => {
	const history = useHistory()
	const mainnHandler = () => history.push('/main')
	return (
		<Card>
			<MainCard>
				<SignUpTitle>
					Sign<StyledH1BlueSignUp>up</StyledH1BlueSignUp>
				</SignUpTitle>
				<CardLayout>Email address:</CardLayout>
				<SignUpBar></SignUpBar>
				<CardLayout>Repeat Email:</CardLayout>
				<SignUpBar></SignUpBar>
				<CardLayout>Password:</CardLayout>
				<SignUpBar></SignUpBar>
				<CardLayout>Repeat Password:</CardLayout>
				<SignUpBar></SignUpBar>
				<CardLayout>
					<SignUpChec>
						<input type='checkbox' /> I Accept Regulations
					</SignUpChec>
				</CardLayout>
				<SignUpButtonDiv>
					<SignUpButtonLeft>Sign in</SignUpButtonLeft>
					<SignUpButtonRight onClick={mainnHandler}>Cancel</SignUpButtonRight>
				</SignUpButtonDiv>
			</MainCard>
		</Card>
	)
}

export default SignUpCard

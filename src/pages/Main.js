import { BackgroundVideo, BackgroundSource, MainEuro, MainDiv } from './Main.styled'
const Main = props => {
	return (
		<>
			<MainEuro>
				<BackgroundVideo playing>
					<BackgroundSource src='videos/eurosoc-mail-broken.mp4' type='video/mp4' />

					<a href='videos/eurosoc-mail-broken.mp4'>MP4</a>
				</BackgroundVideo>
			</MainEuro>
			<MainDiv></MainDiv>
		</>
	)
}

export default Main

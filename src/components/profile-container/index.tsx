import { TypeAnimation } from 'react-type-animation'
import { Container, ProfileImg } from './styles'

export function ProfileContainer() {
	return (
		<Container>
			<ProfileImg />

			<p>Lucas Galdino</p>
			<TypeAnimation
				sequence={[
					'Programador Full-Stack',
					2000,
					'Freelancer',
					2000,
					'Desenvolvedor Web',
					2000
				]}
				repeat={Number.POSITIVE_INFINITY}
			/>
		</Container>
	)
}

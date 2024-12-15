import { Footer } from '../../components/footer'
import { LinksContainer } from '../../components/links-container'
import { MiniLinksContainer } from '../../components/mini-links-container'
import { ProfileContainer } from '../../components/profile-container'
import { Main } from './styles'

export function Home() {
	return (
		<Main>
			<ProfileContainer />
			<MiniLinksContainer />
			<LinksContainer />
			<Footer />
		</Main>
	)
}

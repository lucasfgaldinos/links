import {
	ArrowRight,
	DiceThree,
	FolderOpen,
	GithubLogo,
	Image,
	Laptop
} from '@phosphor-icons/react'
import { Container } from './styles'

export function LinksContainer() {
	return (
		<Container>
			<a
				target="_blank"
				href="https://www.workana.com/freelancer/99e16571af2fa0ffd7e6be0e2091ea6d"
				rel="noreferrer"
			>
				<Laptop />

				<p>Meu perfil na Workana</p>

				<ArrowRight />
			</a>
			<a
				target="_blank"
				href="https://github.com/lucasfgaldinos"
				rel="noreferrer"
			>
				<GithubLogo />

				<p>Meu perfil no GitHub</p>

				<ArrowRight />
			</a>
			<a
				target="_blank"
				href="https://github.com/lucasfgaldinos?tab=repositories"
				rel="noreferrer"
			>
				<FolderOpen />

				<p>Todos os meus Projetos</p>

				<ArrowRight />
			</a>
			<a
				target="_blank"
				href="https://sualandingpage.netlify.app/"
				rel="noreferrer"
			>
				<Image />

				<p>Sua Landing Page</p>

				<ArrowRight />
			</a>
			<a
				target="_blank"
				href="https://lucasfgaldinos.github.io/sorteio-facil/"
				rel="noreferrer"
			>
				<DiceThree />

				<p>Sorteio Fácil</p>

				<ArrowRight />
			</a>
		</Container>
	)
}

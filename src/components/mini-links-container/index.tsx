import {
	EnvelopeSimple,
	LinkedinLogo,
	WhatsappLogo
} from '@phosphor-icons/react'
import { Container } from './styles'

export function MiniLinksContainer() {
	return (
		<Container>
			<a
				href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva"
				title="LinkedIn"
				target="_blank"
				rel="noreferrer"
			>
				<LinkedinLogo />
			</a>
			<a
				href="https://wa.me/5516981272448"
				title="Whatsapp"
				target="_blank"
				rel="noreferrer"
			>
				<WhatsappLogo />
			</a>
			<a
				href="mailto:lucasfgaldinos@outlook.com"
				title="E-mail"
				target="_blank"
				rel="noreferrer"
			>
				<EnvelopeSimple />
			</a>
		</Container>
	)
}

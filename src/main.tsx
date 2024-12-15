import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/global'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		<GlobalStyles />
	</StrictMode>
)

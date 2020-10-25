import { Navbar, Visualizer } from './components'
import { Box } from '@material-ui/core'

function App() {
	return (
		<Box display="flex" flexDirection="column" height="100%">
			<Navbar />
			<Visualizer />
		</Box>
	)
}

export default App

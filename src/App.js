import { Navbar, Visualizer } from './components'
import { Box } from '@material-ui/core'

const exampleData = [
	{ id: 1, value: 20 },
	{ id: 2, value: 100},
	{ id: 3, value: 80},
	{ id: 4, value: 59},
	{ id: 5, value: 10},
]

function App() {
	return (
		<Box display="flex" flexDirection="column" height="100%">
			<Navbar />
			<Visualizer data={exampleData}/>
		</Box>
	)
}

export default App

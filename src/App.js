import { Navbar, Visualizer } from './components'
import { Box, MuiThemeProvider, createMuiTheme, Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useThemeMode, useData, useAlgorithms } from './hooks'

function App() {
	const [theme, toggleThemeMode] = useThemeMode()
	const themeConfig = createMuiTheme(theme)

	const initialDataSize = 50
	const [data, setGeneratedData, setData] = useData(initialDataSize)
	const [algorithm, setAlgorithm, algorithms] = useAlgorithms()

	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline/>
			<Box display="flex" flexDirection="column" height="100%">
				<Navbar
					handleToggleThemeMode={toggleThemeMode}
					handleGenerateData={setGeneratedData}
					initialDataSize={initialDataSize}
					algorithm={algorithm}
					setAlgorithm={setAlgorithm}
					algorithms={algorithms}
				/>
				<Button
					variant="contained"
					style={{ height: 40, fontSize: 20 }}
					color="primary"
					onClick={() => algorithm.run(data, setData)}
				>SORT</Button>

				<Visualizer data={data}/>
			</Box>
		</MuiThemeProvider>
	)
}

export default App

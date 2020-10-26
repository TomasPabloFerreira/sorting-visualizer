import { Navbar, Visualizer } from './components'
import { Box, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useThemeMode } from './hooks'

const exampleData = [
	{ id: 1, value: 20 },
	{ id: 2, value: 100},
	{ id: 3, value: 80},
	{ id: 4, value: 59},
	{ id: 5, value: 10},
	{ id: 6, value: 10},
	{ id: 7, value: 10},
	{ id: 8, value: 10},
	{ id: 9, value: 10},
	{ id: 10, value: 10},
	{ id: 11, value: 10},
	{ id: 12, value: 10},
	{ id: 13, value: 10},
	{ id: 14, value: 10},
	{ id: 15, value: 10},
	{ id: 16, value: 10},
	{ id: 17, value: 10},
	{ id: 18, value: 10},
	{ id: 19, value: 10},
	{ id: 20, value: 10},
]

function App() {
	const [theme, toggleThemeMode] = useThemeMode()
	const themeConfig = createMuiTheme(theme)

	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline/>
			<Box display="flex" flexDirection="column" height="100%">
				<Navbar toggleThemeMode={toggleThemeMode} />

				<Visualizer data={exampleData}/>
			</Box>
		</MuiThemeProvider>
	)
}

export default App

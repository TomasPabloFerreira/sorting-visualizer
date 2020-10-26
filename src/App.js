import { Navbar, Visualizer } from './components'
import { Box, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useThemeMode, useData } from './hooks'

function App() {
	const [theme, toggleThemeMode] = useThemeMode()
	const themeConfig = createMuiTheme(theme)

	const initialDataSize = 50
	const [data, setGeneratedData] = useData(initialDataSize)

	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline/>
			<Box display="flex" flexDirection="column" height="100%">
				<Navbar
					handleToggleThemeMode={toggleThemeMode}
					handleGenerateData={setGeneratedData}
				/>

				<Visualizer data={data}/>
			</Box>
		</MuiThemeProvider>
	)
}

export default App

import { AppBar, Toolbar, Button, FormControlLabel, Switch } from '@material-ui/core'

const Navbar = ({ handleToggleThemeMode, handleGenerateData }) => {
	return (
		<AppBar position="static">
			<Toolbar>

				<FormControlLabel
					control={<Switch onClick={handleToggleThemeMode} />}
				/>

				<Button variant="contained" color="secondary" onClick={() => {handleGenerateData(200)}}>
					GENERATE
				</Button>

			</Toolbar>
		</AppBar>
	)
}

export default Navbar

import { AppBar, Toolbar, Button, FormControlLabel, Switch } from '@material-ui/core'

const Navbar = ({ toggleThemeMode }) => {
	return (
		<AppBar position="static">
			<Toolbar>

				<FormControlLabel
					control={<Switch onClick={toggleThemeMode} />}
				/>

				<Button variant="contained" color="secondary">
					GENERATE
				</Button>

			</Toolbar>
		</AppBar>
	)
}

export default Navbar

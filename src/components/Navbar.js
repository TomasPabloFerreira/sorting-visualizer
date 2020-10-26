import { AppBar,Toolbar, FormControlLabel, Switch } from '@material-ui/core'
import DataSizeSelector from './DataSizeSelector'

const Navbar = ({
	handleToggleThemeMode,
	handleGenerateData,
	initialDataSize
}) => {
	return (
		<AppBar position="static">
			<Toolbar>

				<FormControlLabel
					control={<Switch onClick={handleToggleThemeMode} />}
				/>

				<DataSizeSelector
					handleGenerateData={handleGenerateData}
					initialDataSize={initialDataSize}
				/>

			</Toolbar>
		</AppBar>
	)
}

export default Navbar

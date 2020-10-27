import { AppBar,Toolbar, FormControlLabel, Switch } from '@material-ui/core'
import { DataSizeSelector, ChipSelector } from '.'
import { useAlgorithms } from '../hooks'

const Navbar = ({
	handleToggleThemeMode,
	handleGenerateData,
	initialDataSize
}) => {
	const [algorithm, setAlgorithm, algorithms] = useAlgorithms()

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

				<ChipSelector
					handleClick={setAlgorithm}
					selected={algorithm}
					data={algorithms}
				/>

			</Toolbar>
		</AppBar>
	)
}

export default Navbar

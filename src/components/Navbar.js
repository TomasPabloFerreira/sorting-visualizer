import { AppBar,Toolbar, FormControlLabel, Switch, makeStyles } from '@material-ui/core'
import { DataSizeSelector, ChipSelector } from '.'
import { useAlgorithms } from '../hooks'

const useStyles = makeStyles((theme) => ({
	container: {
		justifyContent: 'space-between'
	},
	dataSizeSelector: {
		display: 'flex',
		alignItems: 'center'
	},
	algorithmSelector: {
		margin: 'auto'
	},
	themeSelector: {
		marginLeft: 'auto'
	}
}))

const Navbar = ({
	handleToggleThemeMode,
	handleGenerateData,
	initialDataSize
}) => {
	const [algorithm, setAlgorithm, algorithms] = useAlgorithms()
	const styles = useStyles()

	return (
		<AppBar position="static" color="inherit">
			<Toolbar className={styles.container}>

				<div className={styles.dataSizeSelector}>
					<DataSizeSelector
						handleGenerateData={handleGenerateData}
						initialDataSize={initialDataSize}
					/>
				</div>

				<div className={styles.algorithmSelector}>
					<ChipSelector
						handleClick={setAlgorithm}
						selected={algorithm}
						data={algorithms}
						className={styles.grow}
					/>
				</div>

				<div className={styles.themeSelector}>
					<FormControlLabel
						control={<Switch onClick={handleToggleThemeMode} />}
						edge="start"
					/>
				</div>

			</Toolbar>
		</AppBar>
	)
}

export default Navbar

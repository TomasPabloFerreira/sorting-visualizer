import { AppBar,Toolbar, FormControlLabel, Switch, makeStyles } from '@material-ui/core'
import { DataSizeSelector, ChipSelector } from '.'

const useStyles = makeStyles({
	container: {
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	dataSizeSelector: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	algorithmSelector: {
		margin: 'auto'
	},
	themeSelector: {
		marginLeft: 'auto'
	}
})

const Navbar = ({
	handleToggleThemeMode,
	handleGenerateData,
	initialDataSize,
	algorithm,
	setAlgorithm,
	algorithms
}) => {
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

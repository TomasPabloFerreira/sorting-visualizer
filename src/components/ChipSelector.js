import { makeStyles, Chip, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		padding: theme.spacing(0.5),
		margin: 0,
	},
	chip: {
		margin: theme.spacing(0.5),
	},
}))

const ChipSelector = ({ data, selected, handleClick }) => {
	const styles = useStyles()
	const onClick = (x) => () => handleClick(x)

	return (
		<Paper component="ul" className={styles.container}>
			{data.map(x => (
				<li key={x.key}>
					<Chip
						{
							...x.key === selected.key
								? null
								: { variant: "outlined", onClick: onClick(x) }
						}
						color="primary"
						className={styles.chip}
						label={x.name}
					/>
				</li>
			))}
		</Paper>
	)
}

export default ChipSelector

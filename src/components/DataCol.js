import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		flex: 1,
		margin: '0 5px',
		borderRadius: '100px 100px 0 0',
		height: ({ value }) => `${value}%`,
		minWidth: 10
	}
})

const DataCol = ({ value }) => {
	const styles = useStyles({ value })

	return (
		<div className={styles.root} />
	)
}

export default DataCol

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	root: {
		backgroundColor: '#993333',
		flex: 1,
		margin: '0 5px',
		borderRadius: '100px 100px 0 0',
		height: ({ value }) => `${value}%`
	}
})

const DataCol = ({ value }) => {
	const styles = useStyles({ value })

	return (
		<div className={styles.root} />
	)
}

export default DataCol

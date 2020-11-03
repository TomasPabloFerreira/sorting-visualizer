import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	root: {
		flex: 1,
		margin: '0 1px',
		borderRadius: '100px 100px 0 0',
		minWidth: 5
	}
})

const DataCol = ({ value, color }) => {

	const background = !color 
		? 'linear-gradient(340deg, #FE6B8B 30%, #FF8E53 90%)'
		: color === 1
			? 'red'
			: 'linear-gradient(340deg, #FE1B8B 30%, #2F8EF3 90%)'

	const styles = useStyles()
	const style = {
		height: `${value}%`,
		background: `${background}`
	}

	return (
		<div className={styles.root} style={style} />
	)
}

export default DataCol

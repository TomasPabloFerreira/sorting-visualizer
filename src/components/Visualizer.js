import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flex: 1,
		padding: '50px 0'
	},
	paper: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-end',
		padding: '15px 10px 0 10px'
	},
	col: {
		backgroundColor: '#993333',
		flex: 1,
		margin: '0 5px',
		borderRadius: '100px 100px 0 0',
		height: '100%'
	}
})

const Visualizer = () => {
	const styles = useStyles()

	return (
		<Container className={styles.container}>
			<Paper elevation={3} className={styles.paper}>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col} height="20%"></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
				<div className={styles.col}></div>
			</Paper>
		</Container>
	)
}

export default Visualizer

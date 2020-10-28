import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { DataCol } from './'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flex: 1,
		padding: '50px 0',
		minWidth: '75%'
	},
	paper: {
		flex: 1,
		display: 'flex',
		alignItems: 'flex-end',
		padding: '15px 10px 0 10px',
		overflowX: 'auto'
	}
})

const Visualizer = ({ data }) => {
	const styles = useStyles()

	return (
		<Container className={styles.container}>
			<Paper elevation={3} className={styles.paper}>
				{ data.map(x =>
					<DataCol key={x.id} value={x.value} color={x.color} />
				)}
			</Paper>
		</Container>
	)
}

export default Visualizer

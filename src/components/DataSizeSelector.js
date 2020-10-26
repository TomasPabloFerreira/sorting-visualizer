import { makeStyles, Typography, Slider, Button } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles({
	slider: {
		width: 300,
		marginTop: 10,
		marginRight: 25
	}
})

const DataSizeSelector = ({ handleGenerateData, initialDataSize }) => {
	const styles = useStyles()
	const [dataSize, setDataSize] = useState(initialDataSize)

	const generate = () => {
		handleGenerateData(dataSize)
	}

	const handleSliderChange = (e, val) => {
		setDataSize(val)
	}

	return (
		<>
			<div className={styles.slider}>

				<Typography id="discrete-slider" gutterBottom>
					Elements
				</Typography>
				<Slider
					defaultValue={50}
					valueLabelDisplay="auto"
					step={25}
					marks
					min={25}
					max={200}
					color="secondary"
					onChangeCommitted={handleSliderChange}
				/>
			</div>

			<Button variant="contained" color="secondary" onClick={generate}>
				GENERATE
			</Button>
		</>
	)
}

export default DataSizeSelector

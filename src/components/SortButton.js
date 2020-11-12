import { Button } from '@material-ui/core'
import { useRef, useState } from 'react'

const SortButton = ({ algorithm, data, setData }) => {

	const [sorting, setSorting] = useState(false)
	const sortingRef = useRef(false)

	const startSorting = async () => {
		setSorting(true)
		sortingRef.current = true
		algorithm.run(data, setData, sortingRef, stopSorting)
	}

	const stopSorting = () => {
		setSorting(false)
		sortingRef.current = false
	}

	return(
		sorting ?
			<Button
				variant="contained"
				style={{ height: 40, fontSize: 20 }}
				color="secondary"
				onClick={() => { stopSorting() }}
			>
				STOP
			</Button>
			:
			<Button
				variant="contained"
				style={{ height: 40, fontSize: 20 }}
				color="primary"
				onClick={() => { startSorting() }}
			>
				SORT
			</Button>
	)
}

export default SortButton

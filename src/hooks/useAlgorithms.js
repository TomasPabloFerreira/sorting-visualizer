import { useState } from 'react'
import { selectionSort, bubbleSort, insertionSort, mergeSort } from '../algorithms'

const algorithms = [
	{ key: 1, name: 'Selection', run: selectionSort },
	{ key: 2, name: 'Bubble', run: bubbleSort },
	{ key: 3, name: 'Insertion', run: insertionSort },
	{ key: 4, name: 'Merge', run: mergeSort }
]

const useAlgorithms = () => {

	const [algorithm, setAlgorithm] = useState(algorithms[0])

	return [algorithm, setAlgorithm, algorithms]
}

export default useAlgorithms

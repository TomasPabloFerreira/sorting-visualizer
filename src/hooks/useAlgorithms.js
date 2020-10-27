import { useState } from 'react'

const algorithms = [
	{ key: 1, name: 'Selection' },
	{ key: 2, name: 'Bubble' },
	{ key: 3, name: 'Insertion' }
]

const useAlgorithms = () => {

	const [algorithm, setAlgorithm] = useState(algorithms[0])

	return [algorithm, setAlgorithm, algorithms]
}

export default useAlgorithms

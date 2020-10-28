import { useState } from 'react'

const swap = (data, i, z) => {
	let tmp = data[z]
	data[z] = data[i]
	data[i] = tmp
}

const delay = () => {
	return new Promise(r => setTimeout(r, 3))
}

const selectionSort = async (data, setItems) => {
	const items = [...data]

	let length = items.length;
	for (let i = 0; i < length ; i++) {

		let min = i;

		for (let j = i + 1; j < length; j++) {

			if (items[j].value <= items[min].value) {
				items[min].color = 0
				min = j;
			}

			items[j].color = 1
			if(j-1 !== min) items[j-1].color = 0

			setItems([...items])
			await delay()
		}

		items[length-1].color = 0
		items[min].color = 2
		swap(items, i, min)

		setItems([...items])
		await delay()
	}
}

const bubbleSort = () => {

}

const insertionSort = () => {

}

const algorithms = [
	{ key: 1, name: 'Selection', run: selectionSort },
	{ key: 2, name: 'Bubble' },
	{ key: 3, name: 'Insertion' }
]

const useAlgorithms = () => {

	const [algorithm, setAlgorithm] = useState(algorithms[0])

	return [algorithm, setAlgorithm, algorithms]
}

export default useAlgorithms

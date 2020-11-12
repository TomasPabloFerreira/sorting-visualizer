export { default as selectionSort } from './SelectionSort'
export { default as insertionSort } from './InsertionSort'
export { default as bubbleSort } from './BubbleSort'
export { default as mergeSort } from './MergeSort'

export const swap = (data, i, z) => {
	let tmp = data[z]
	data[z] = data[i]
	data[i] = tmp
}

export const resetColors = (data, setData) => {
	const newData = data.map(x => ({ ...x, color: 0 }))
	setData(newData)
}

export const delay = () => {
	return new Promise(r => setTimeout(r, 3))
}

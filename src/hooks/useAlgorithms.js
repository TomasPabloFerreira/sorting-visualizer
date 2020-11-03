import { useState } from 'react'

const swap = (data, i, z) => {
	let tmp = data[z]
	data[z] = data[i]
	data[i] = tmp
}

const delay = () => {
	return new Promise(r => setTimeout(r, 3))
}

const selectionSort = async (data, setData) => {
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

			setData([...items])
			await delay()
		}

		items[length-1].color = 0
		items[min].color = 2
		swap(items, i, min)

		setData([...items])
		await delay()
	}
}

const bubbleSort = async (data, setData) => {
	const items = [...data]
	let length = items.length

	let sorted = false
	while(!sorted) {
		sorted = true
		for(let i = 0; i < length - 1; i++) {

			items[i].color = 1
			items[i+1].color = 1
			setData([...items])
			await delay()

			if (items[i].value > items[i + 1].value) {
				sorted = false;
				swap(items, i, i + 1);
				setData([...items])
				await delay()
			}

			items[i].color = 0
			items[i+1].color = 0
		}
		items[length - 1].color = 2
		length--;
	}

	const sortedArray = items.map(x => ({ ...x, color: 2 }))
	setData(sortedArray)
}

const insertionSort = async (data, setData) => {
	const items = [...data]
	let length = items.length

	for(let i = 1; i < length; i++) {
		let j = i - 1
		let current = items[i]

		while(j >= 0 && items[j].value > current.value) {

			items[j].color = 1
			items[j + 1].color = 1
			setData([...items])
			await delay()

			swap(items, j, j + 1)
			setData([...items])
			await delay()

			items[j].color = 2
			items[j + 1].color = 2

			j--
		}
	}
	setData([...items])
}

const mergeSort = async (data, setData) => {
	let result = [...data]
	let len = result.length;
	
	for (let size = 1; size < len; size *= 2)
	{
		for (let leftStart = 0; leftStart < len; leftStart += 2 * size)
		{ 
			let backup = [...result]

			let left = leftStart;
			let right = Math.min(left + size, len);
			let leftLimit = right;
			let rightLimit = Math.min(right + size, len);

			// colors
			result = result.map((x, i) => {
				if(i >= left && i <= rightLimit) {
					return { ...x, color: 1 }
				}
				return x
			})
			setData([...result])
			await delay()

			let i = left;

			while (left < leftLimit && right < rightLimit) {
				result[i++].value = (backup[left].value <= backup[right].value)
					? backup[left++].value
					: backup[right++].value
				setData([...result])
				await delay()
			}

			while (left < leftLimit) {
				result[i++].value = backup[left++].value
				setData([...result])
				await delay()
			}

			while (right < rightLimit) {
				result[i++].value = backup[right++].value
				setData([...result])
				await delay()
			}

			// colors
			result = result.map(x => ({ ...x, color: 0 }))
			setData([...result])
			await delay()
		}
	}

	// colors
	result = result.map(x => ({ ...x, color: 2 }))
	setData(result)
}

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

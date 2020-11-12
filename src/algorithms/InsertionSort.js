import { swap, delay, resetColors } from '.'

const insertionSort = async (data, setData, sortingRef, stopSorting) => {
	const items = [...data]
	let length = items.length

	for(let i = 1; i < length; i++) {
		let j = i - 1
		let current = items[i]

		while(j >= 0 && items[j].value > current.value) {

			if(!sortingRef.current) return resetColors(items, setData);

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
	stopSorting()
}

export default insertionSort

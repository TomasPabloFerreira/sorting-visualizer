import { swap, delay, resetColors } from '.'

const selectionSort = async (data, setData, sortingRef, stopSorting) => {
	const items = [...data]
	let length = items.length;

	for (let i = 0; i < length ; i++) {

		let min = i;

		for (let j = i + 1; j < length; j++) {
			if(!sortingRef.current) return resetColors(items, setData);

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
	stopSorting()
}

export default selectionSort

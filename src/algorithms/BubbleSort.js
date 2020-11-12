import { swap, delay, resetColors } from '.'

const bubbleSort = async (data, setData, sortingRef, stopSorting) => {
	const items = [...data]
	let length = items.length

	let sorted = false
	while(!sorted) {
		sorted = true
		for(let i = 0; i < length - 1; i++) {

			if(!sortingRef.current) return resetColors(items, setData);

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
	stopSorting()
}

export default bubbleSort

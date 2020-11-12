import { delay, resetColors } from '.'

const mergeSort = async (data, setData, sortingRef, stopSorting) => {
	let result = [...data]
	let len = result.length;
	
	for (let size = 1; size < len; size *= 2)
	{
		for (let leftStart = 0; leftStart < len; leftStart += 2 * size)
		{ 
			if(!sortingRef) return resetColors(result, setData);

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
	stopSorting()
}

export default mergeSort

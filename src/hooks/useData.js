import { useState } from 'react'

const generateData = (n) => {
	const newArray = [...Array(n).keys()]
	const newData = newArray.map(x => {
		return {
			id: x,
			value: Math.floor(Math.random() * 100) + 1 ,
		}
	})

	return newData
}

const useData = (n) => {
	const [data, setData] = useState(generateData(n))

	const setGeneratedData = (n) => {
		const newData = generateData(n)
		setData(newData)
	}

	return [data, setGeneratedData]
}

export default useData

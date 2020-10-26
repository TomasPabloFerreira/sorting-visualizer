import { useState } from 'react'
import {createMuiTheme} from '@material-ui/core'

const themeObject = createMuiTheme({
	palette: {
		type: 'dark',
	}
})

const useThemeMode = () => {
	const [theme, setTheme] = useState(themeObject)
	const { palette: { type } } = theme

	const toggleThemeMode = () => {
		const updatedTheme = {
			...theme.palette,
			type: type === 'light' ? 'dark' : 'light'
		}
		setTheme(updatedTheme)
	}

	return [theme, toggleThemeMode]
}

export default useThemeMode

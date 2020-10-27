import { useState } from 'react'
import * as colors from '@material-ui/core/colors'

const themeObject ={
	palette: {
		type: 'dark',
		primary: {
			main: colors.amber[200]
		},
		secondary: {
			main: colors.indigo[200]
		}
	}
}

const useThemeMode = () => {
	const [theme, setTheme] = useState(themeObject)
	const { palette: { type } } = theme

	const toggleThemeMode = () => {
		const shade = type === 'light' ? 200 : 400
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === 'light' ? 'dark' : 'light',
				primary: {
					main: colors.amber[shade]
				},
				secondary: {
					main: colors.indigo[shade]
				}
			}
		}
		setTheme(updatedTheme)
	}

	return [theme, toggleThemeMode]
}

export default useThemeMode

import * as React from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: 'Play',
	},
});

const CustomThemeProvider = ({ children }) => {
  	return (
		// <Box>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		// </Box>
  	)
}

export default CustomThemeProvider;

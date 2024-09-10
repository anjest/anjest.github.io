import * as React from 'react'
import { Box } from '@mui/material'
import CustomThemeProvider from './Theme/CustomThemeProvider'
import Navbar from './Navbar/Navbar'
import Transliterator from './Transliterator/Transliterator'
import Footer from './Footer/Footer'

const App = () => {

  	return (
		<Box>
			<CustomThemeProvider>
				<Navbar />
				<Transliterator />
                <Footer />
			</CustomThemeProvider>
		</Box>
  	)
}

export default App;

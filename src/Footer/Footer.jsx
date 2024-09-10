import * as React from 'react'
import { Box, Toolbar, Typography } from '@mui/material'
import { theme } from '../Theme/CustomThemeProvider'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

const styles = {
	footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.grey[200]
    }
}

const Footer = () => {
  	return (
		<Box sx={styles.footer}>
			<Toolbar>
				{/* <Typography variant="h5" sx={styles.header}>
          			<ChecklistRtlIcon sx={{ marginRight: 1 }} />
					TransliteРація
				</Typography> */}
                <Typography>emailexample@gmail.com</Typography>
			</Toolbar>
		</Box>
  	)
}

export default Footer;

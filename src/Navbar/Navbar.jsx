import * as React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';

const styles = {
	header: { fontSize: 32, letterSpacing: 0.4 }
}

const Navbar = () => {
  	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h5" sx={styles.header}>
          			<ChecklistRtlIcon sx={{ marginRight: 1 }} />
					TransliteРація
				</Typography>
			</Toolbar>
		</AppBar>
  	)
}

export default Navbar;

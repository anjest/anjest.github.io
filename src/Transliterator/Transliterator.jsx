import * as React from 'react'
import { useState } from 'react'
import { Typography, Box, TextField, FormControl, Tabs, Tab, Button } from '@mui/material'
import templates from '../langs/ua_latin.json'
import { transliterateFunctions } from './scripts'
import { theme } from '../Theme/CustomThemeProvider.jsx'
import textExamples from '../langs/text_examples.json'
// import  cover from "../images/blue-3d-particles-background-design_1017-15410.avif"

const styles = {
	section: {
        position: 'relative',
        paddingTop: 16,
		paddingBottom: 6,
		backgroundColor: '#fefefe',
        [theme.breakpoints.up('lg')]: {
			height: '100vh',
		},
        // background: 'center/cover no-repeat',
        // backgroundImage: `url(${cover})`,
        // display: 'flex',
        // alignItems: 'center',
        // width: '100%',
        // backgroundColor: '#000',
	},
	container: {
        [theme.breakpoints.down('lg')]: {
			paddingX: 4,
		},
        [theme.breakpoints.up('lg')]: {
			maxWidth: '1200px',
		    margin: '0 auto',
		},
        zIndex: 1,
	},
    header: {
        // fontSize: 36,
        fontSize: 24,
        // textAlign: 'center',
        // marginBottom: 4
        marginBottom: 2,
        color: theme.palette.grey[800]
    },
	fieldsContainer: {
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'center',
			gap: 4
		},
	},
    formControl: {
        width: '100%',
        marginBottom: 2,
    },
    label: {
        fontSize: 22,
        marginBottom: 1,
    },
    tabsContainer: {
        '.MuiTab-root': {
            backgroundColor: theme.palette.grey[200],
        },
        '.MuiTab-root.Mui-selected': {
            backgroundColor: theme.palette.grey[50],
        },
    },
    textField: {
        '.MuiInputBase-root': {
            borderRadius: 0,
        }
    }
}

function a11yProps(type, index) {
    return {
        id: `${type}-tab-${index}`,
        'aria-controls': `${type}-tabpanel-${index}`,
    };
}

const functionsForTabs = {
    0: 'UA2010',
    1: 'CZ'
}

const Transliterator = () => {
	const [textValue, setTextValue] = useState('')
    const [tabValue, setTabValue] = useState(0)

    const handleChange = (e, newValue) => {
        setTabValue(newValue)
    }

    const transliterateText = (textValue) => {
        return transliterateFunctions[functionsForTabs[tabValue]](textValue, templates[functionsForTabs[tabValue]]) || ''
    }

    const setTextExample = (id) => {
        setTextValue(textExamples[id])
    }

  	return (
		<Box sx={styles.section}>
			<Box sx={styles.container}>
				{/* <Typography sx={styles.header}>
                    Введіть текст українською в поле вводу зліва
				</Typography> */}
				<Box sx={styles.fieldsContainer}>
					<FormControl sx={styles.formControl}>
                        <Typography sx={styles.header}>
                            Введіть текст українською
                        </Typography>
                        <Tabs value={0} aria-label="convert_from" sx={styles.tabsContainer}>
                            <Tab label="Українська" {...a11yProps('convert_from', 0)} />
                        </Tabs>
						<TextField
                            sx={styles.textField}
							rows={12}
                            value={textValue}
							onChange={(e) => setTextValue(e.target.value)}
							multiline
						/>
                        <Box mt={2}>
                            <Typography ml={1}>Готові шаблони:</Typography>
                            <Button onClick={() => setTextExample('LypaShelestyt')}>Ви знаєте, як липа шелестить</Button>
                            <Button onClick={() => setTextExample('LebediMaterynstva')}>Лебеді материнства</Button>
                        </Box>
					</FormControl>
					<FormControl sx={styles.formControl}>
                        <Typography sx={styles.header}>
                            Результат
                        </Typography>
                        <Tabs value={tabValue} onChange={handleChange} aria-label="convert_to" sx={styles.tabsContainer}>
                            <Tab label="Стандарт 2010" {...a11yProps('convert_to', 0)} />
                            <Tab label="Чеська" {...a11yProps('convert_to', 1)} />
                            {/* <Tab label="Item Three" {...a11yProps('convert_to', 2)} /> */}
                        </Tabs>
						<TextField sx={styles.textField} rows={12} value={transliterateText(textValue)} multiline />
					</FormControl>
				</Box>
			</Box>
		</Box>
  	)
}

export default Transliterator;

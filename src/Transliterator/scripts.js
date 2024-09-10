export const transliterateFunctions = {
    CZ: (text, template) => {
        const allLetters = [...template.iotated, ...template.vowels, ...template.consonants, ...template.other]
        let textArr = text.split('')
        const changedText = textArr.map((symbol, i) => {
            const symbolTranslitConditions = allLetters.find((item) => item[0] === symbol.toLowerCase())
            if (symbolTranslitConditions) {
                const isIotated = template.iotated.find((item) => item[0] === symbol.toLowerCase())
                const isPrevConsonant = template.consonants.find((item) => item[0] === textArr[i-1]?.toLowerCase())
                if (isIotated && isPrevConsonant) {
                    return isIotated[2]
                }
                if (symbol.toUpperCase() === symbol) {
                    const result = symbolTranslitConditions[1]
                    if (result.length > 1) {
                        return result.charAt(0).toUpperCase() + result.slice(1)
                    }
                    return result.toUpperCase()
                }
                return symbolTranslitConditions[1]
            }
            return symbol
        })
        return changedText.join('')
    },
    UA2010: (text, template) => {
        const allLetters = [...template.iotated, ...template.vowels, ...template.consonants, ...template.other]
        let textArr = text.split('')
        const changedText = textArr.map((symbol, i) => {
            const symbolTranslitConditions = allLetters.find((item) => item[0] === symbol.toLowerCase())
            if (symbolTranslitConditions) {
                const isIotated = template.iotated.find((item) => item[0] === symbol.toLowerCase())
                const isPrevLetter = textArr[i-1] && textArr[i-1] !== ' '
                if (symbol === 'з' && textArr[i+1] === 'г') {
                    return 'zg'
                }
                if (symbol === 'З' && textArr[i+1] === 'г') {
                    return 'Zg'
                }
                if (isIotated && isPrevLetter) {
                    return isIotated[2]
                }
                if (symbol.toUpperCase() === symbol) {
                    const result = symbolTranslitConditions[1]
                    if (result.length > 1) {
                        return result.charAt(0).toUpperCase() + result.slice(1)
                    }
                    return result.toUpperCase()
                }
                return symbolTranslitConditions[1]
            }
            return symbol
        })
        return changedText.join('')
    }
}
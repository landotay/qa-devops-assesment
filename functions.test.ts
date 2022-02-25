const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returnArray', () => {
        let arr = shuffleArray([1,2,3,4,5])
        expect(Array.isArray(arr)).toBe(true)
    })

    test('Array was shuffled', () => {
        let arr = shuffleArray([1,2,3,4,5])
        expect(arr[0]).not.toEqual(1)
    })
})
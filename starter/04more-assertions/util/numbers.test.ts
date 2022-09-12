import { transformToNumber } from './nums'

it('should transform a string number to a number of type number', () => {
    const input = '1'

    const result = transformToNumber(input)

    expect(result).not.toBeNaN()
})

it('TODO: Task 3 goes here', () => {
    // Arrange
    // create a variable with a string value that is a valid number, e.g. '1'
let three = '3'
    // Act
    // call the transformToNumber function on an input value and assign the result to a variable
let result = transformToNumber(three)
    // Assert
    expect(result).toBe(3)
    // use the expect function to assert that the result is equal to the expected result
})

it('TODO: Task 4 goes here', () => {
    // Arrange
    const input = 'invalid'
    const input2 = {}

    // Act
    // for each input value, call the transformToNumber function on an input value and assign the result to a variable
let firstInput = transformToNumber(input)
let secondInput = transformToNumber(input2)
    // Assert
    expect(firstInput).toBeNaN()
    expect(secondInput).toBeNaN()
    // for each result value, use the expect function to assert that the result is equal to NaN, use toBeNaN function
})
import { add } from './moreAssertions'

it('TODO: task 3 goes here', () => {
  // Arrange

  // Act

  // Assert
})

it('should throw an error if no value is passed into the function', () => {
  // Arrange and Act
  // create a function that calls the add function without any arguments and assign it to a variable
  function add(param){
    if (param === 0) {
      let emptyAddError = 'There is nothing to add'
      return emptyAddError
      
      // Assert
  // use the expect function to assert that the function throws an error, use toThrow function
  expect(add).toThrowError(emptyAddError)
    }
  }
  })
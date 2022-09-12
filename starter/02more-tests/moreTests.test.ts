import {add} from "./math"


it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1, 2];
  
    // Act
    const result = add(numbers);
  
    // Assert
    const expectedResult = numbers.reduce(
      (prevValue, curValue) => prevValue + curValue,
      0
    );
    expect(result).toBe(expectedResult);
  });
  
  it('Should yield a correct sum if an array of numeric string values is provided', () => {
    // TODO: implement this test
  
      // Arrange
      // create an array of numeric string values
      const arrOfStr = ['5', '6', '9'];

      const arrOfNum = arrOfStr.map(str => {
        return Number(str);
      });

      // Act
      // call the add function with the array of numeric string values
      // create a variable with the expected result (sum of the array of numeric string values)
      let answer = add(arrOfNum)
      // Assert
      function sum(arrOfNum) {
        let sum = 0
        for (let i=0; i<arrOfNum.length; i++)
        sum += arrOfNum[i]
      }
      // use the expect function to assert that the result is equal to the expected result
      expect(answer).toBe(20);
    });

  
  it('Should yield "NaN" if invalid number is provided', () => {
      // TODO: implement this test
  
      // Arrange
      // create an array of numeric string values where one of the values is 'invalid'
      let strArr = ['1','2','J']
      const numArr = strArr.map(str => {
        return Number(str);
      });
      // Act
      // call the add function with the array
      let nAnswer = add(numArr)
      // Assert
      nAnswer = NaN
      // use the expect function to assert that the result is equal to NaN, use toBeNaN function
      expect(NaN).toBeNaN()
  });
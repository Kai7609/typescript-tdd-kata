import fizzBuzz from "../src/fizzBuzz";

describe('FizzBuzz tdd test', () => {
    let answer : string[];

    beforeAll(async () => {
        answer = fizzBuzz(15);
    });
    it('should return \"Fizz\" if i is divisible by 3', () => {
        expect(answer[3-1]).toBe("Fizz");
    });
    it('should return \"Buzz\" if i is divisible by 5', () => {
        expect(answer[5-1]).toBe("Buzz");
    });
    it('should return \"FizzBuzz\" if i is divisible by 3 and 5', () => {
        expect(answer[15-1]).toBe("FizzBuzz");
    });
    it('should return \"i\" if i is NOT divisible by 3 or 5', () => {
        expect(answer[1-1]).toBe("1");
    });
    it('should return the proper list of strings', () => {
        expect(answer).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
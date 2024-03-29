**Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.**

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

##Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.

##Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".

##Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.



#Explaination of ToBeOrNotToBe.js 

This JavaScript function *expect* is a simple implementation of a testing utility. Here's how it works:

1. *expect* is a function that takes an argument *val*. This is the value that you want to test.

2. The function returns an object with two methods: *toBe* and *notToBe*. These methods are used to compare *val* with another value.

3. The *toBe* method takes an argument *expectedVal*. It checks if val is strictly equal (*===*) to *expectedVal*. If they are equal, it returns *true*. If they are not equal, it throws an error with the message "Not Equal".

4. The *notToBe* method also takes an argument *expectedVal*. It checks if *val* is not strictly equal (*!==*) to *expectedVal*. If they are not equal, it returns *true*. If they are equal, it throws an error with the message "Equal".

This function is used to write test cases in code to ensure that the code behaves as expected. You would use it like this:

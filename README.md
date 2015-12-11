# MentalMathProblem
MentalMathProblem is a javascript function that generates a unique mental arithmetic problem. I created the function for my app
www.mathmataz.com which I recently published. The app poses a mental math problem by displaying to the user, one line at a time, something such as this:

What is:
7 multiplied by 6
minus 8
plus 11
divided by 9
multiplied by 5
minus 7

The mentalMathProblem function creates each of these strings and puts them into an array. The hard work for the function involves taking the answer from the previous string, making a decision as to what operation to execute next, and then generating numbers within specified ranges for the next operation.


# MentalMathProblem
MentalMathProblem is a javascript function that generates a unique mental arithmetic problem. I created the function for the app www.mathmataz.com which I recently published. The app poses a mental math problem by displaying to the user, one line at a time, something such as this:

What is: 7 multiplied by 6, minus 8, plus 11, divided by 9, multiplied by 5, minus 7

The mentalMathProblem function creates each of these strings and puts them into an array. The hard work for the function involves taking the answer from the previous string, making a decision as to what operation to execute next, and then generating numbers within a specified range for the next operation. Each level has a ceiling that the answer should never exceed. Each level also has min and max values for the numbers being added and subtracted and for the multipliers and divisors.

Many of the conditions are for what I call 'controlled randomness' and may seem unnecessary when taken out of context. I need the function to return varied, consistently difficult problems that feel like they are being randomly generated. In building this function, I found that random number generation produces certain result sets that are bad for user experience. Entirely removing these result sets makes the user's experience feel less random and is less fun. So what I'm doing with this function is minimizing these types of results and eliminating only the absolute worst(i.e. adding and then immediately subtracting the same number).

The two arrays in the comments at the bottom of the file are the arrays of variables used by level 3 in the game 'The Big Four' on www.mathmataz.com. I'm interested in any comments or suggestions that you may have regarding the code, coding style, or best practices that I could employ. Please contact me if you have any questions. 


// The function creates 6 strings when you use the variables provided at the bottom of the file. The function first() creates one
// string, and moreComplex() creates the rest using a for loop. I will refer to each string as an iteration whether it was created
// by first() or moreComplex().
function mentalMathProblem() {
	var prob = []; // returned by mentalMathProblem
	var answer = 0; // returned by mentalMathProblem
	var last = 0; //last number added, subtracted, multiplied by, or divided by
	var prev = 0; //previous answer from last iteration
	var d = 0; //number of division operations
	var e = 0; //number of multiplication operations
	var lob = Indx; // var w = new Date(); Indx = w.getSeconds(); Using time in seconds as a random seed for the getRand()
			// number generator. Declare Indx outside of this function.
	
	// returns (a,b) inclusive
	function getRandom(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRand(x,y){
		var a = 0;
		var b = 0;
		var c = x;
		var f = y;
		// 7 arrays [2..20] shuffled.
		var numbers = Array(17,13,12,4,7,11,15,14,18,8,3,5,11,2,19,16,3,20,6,16,4,14,12,10,15,9,20,19,17,13,8,18,6,7,2,5,9,
			15,18,20,2,4,3,9,11,8,17,18,20,8,14,19,7,3,10,5,4,6,9,13,17,16,2,13,14,5,19,12,15,12,7,11,6,16,
			16,17,4,7,9,15,20,9,16,8,3,12,11,19,4,13,14,18,6,18,11,7,10,5,15,19,2,17,6,3,14,13,8,5,20,12,2,
			13,17,18,8,16,9,12,11,14,20,6,15,10,3,19,4,2,5,7); //130  I removed 3 of what were originaly seven 10's for
										// more consistent play.
		// import numbers[] index from previous funtion call								
		var i = lob;
		if(i > 111){
			i = 0;
		}
		do{
			a = 0;
			b = numbers[i];
			i += 1;
			if(b < c || b > f){
				a = 1;
			}
			// We remove the last number and previous answer for good game play and to
			// avoid scenarios such as 7 + 7 - 7.
			else if(b === last || b === prev){ 
				a = 1;
			}
		} while(a === 1);
		// save numbers[] index for next call
		lob = i;
		return b;
	}
	
	function first() {
		// general use variables for manipulating values
		var a = 0;
		var b = 0;
		var c = 0;
		var f = 0;
		var g = 0;
		var m = "";
		// an array containing the variables corresponding to a particular level of difficulty
		var cplxVars = yourArrayObject();
		var f1 = cplxVars[0]; //first min random for add
		var f2 = cplxVars[1]; // first max random for add
		var f3 = cplxVars[2]; //first min number to add
		var f4 = cplxVars[3]; //first max for number to add
		var f5 = cplxVars[4]; // first min for sub
		var f6 = cplxVars[5]; //first max for sub
		var f7 = cplxVars[6]; //first min for number to be sub
		var f8 = cplxVars[7]; //first max for number to be sub
		var f9 = cplxVars[8]; //first min for multi and div
		var f10 = cplxVars[9]; //first max for multi and div
		var f11 = cplxVars[10]; //first min for number to be multi or div
		
		// decide what operation to execute first.
		var ch = getRandom(1,5);
		switch(ch){
			case 1:
				a = getRandom(f1,f2);
				b = getRand(f3,f4);
				answer = a + b;
				m = "What is " + a + " plus " + b;
				last = b;
				prev = a;
				break;
			case 2:
				a = getRandom(f5,f6);
				b = getRand(f7,f8);
				answer = a - b;
				m = "What is " + a + " minus " + b;
				last = b;
				prev = 2;
				break;
			case 3:
			case 4:
				a = getRand(f9,f10);
				c = f6/a;
				f = Math.floor(c);
				if(f > f10){
					f = f10;
				}
				b = getRand(f11,f);
				answer = a * b;
				m = "What is " + a + " multiplied by " + b;
				prev = a;
				last = b;
				e += 1;
				break;
			case 5:
				b = getRand(f9,f10);
				c = f6/b;
				f = Math.floor(c);
				if(f > f10){
					f = f10;
				}
				g = getRand(f11,f);
				a = b * g;
				answer = a/b;
				m = "What is " + a + " divided by " + b;
				last = b;
				prev = 0;
				d += 1;
		}
		prob.push(m); //push string into prob[] 
		moreComplex();
	}
	function moreComplex() {
		// general use variables for manipulating values
		var b = 0;
		var c = 0;
		var f = 0;
		var g = 0;
		var h = 0;
		var i = 0;
		var j = 0;
		var k = 0;
		var l = 0;
		var t = "";
		// the second array containing variables corresponding to the level of difficulty
		var moreVars = anotherArrayObject();
		var k1 = moreVars[0]; //number of iterations
		var k2 = moreVars[1]; //cutoff above which we will first attempt divide
		var k3 = moreVars[2]; //min for divisor
		var k4 = moreVars[3]; //max for divisor
		var k5 = moreVars[4]; //cutoff above which will subtract
		var k6 = moreVars[5]; //ceiling
		var k7 = moreVars[6]; //max to be added
		var k8 = moreVars[7]; //min to be added
		var k9 = moreVars[8]; //max to be sub
		var k10 = moreVars[9]; //min to be sub
		var k11 = moreVars[10]; //max to be multi
		var k12 = moreVars[11]; //min to be multi
		var k13 = moreVars[12]; //above which you will add for first add
		var k14 = moreVars[13]; //below which you will subtract first sub
		var q = 0;
		// loop iterates k1 times and each time pushes another string onto prob[] 
		for(i=0; i < k1; i += 1){
			q = getRandom(1,2);
			// If the answer from the last iteration is above k2 and, therefore, 
			// within the range where division can take place, then we will
			// attempt to divide in multiple ways or else default to addition/subtraction.
			// Much of the work being done is in order to keep the numbers within the
			// specified ranges for the current game level.
			// q is used as a random boolean and so is the value of 'last'
			// because it is always changing. 
			if(answer > k2){ 
				if((last % 2 === 0) || (d === 0 && i > 1)) {
					if(answer > 30){
						// Here, we make sure that the randomly chosen
						// divisor is not to small for the 
						// number we are going to divide.
						c = Math.floor(answer / k4);
						if(c * k4 < answer){
							c = c + 1;
						}
					}
					else if(answer <= 30){
						c = k3;
					}
					h = getRand(c,k4);
					j = answer % h;
					// Check to see if the answer is divisible by our chosen divisor
					if(answer % h === 0) {
						t = "divi";
						}
					// We use information in the variable j (answer mod divisor)
					// to construct an addition or subtraction problem that will take us to a 
					// number that is divisible by h, the divisor. The addition or subtraction
					// string is pushed onto prob[] imediately, while the division 
					// string is passed to the conditional block at the bottom of the function.
					else if(i !== k1-1){
						if((answer + (h - j) + h <= k6 && (answer + (h - j) + h) / h <= k4) && ((h - j) + h <= k7 && last !== (h - j) +h)){
							k = (h - j) +h;
							answer = answer + k;
							prob.push("plus " + k);
							i += 1;
							t = "divi";
						}
						else if((answer - (h + j) > h && last !== h + j) && (h + j <= k9)){
								k = h + j;
								answer = answer - k;
								prob.push("minus " + k);
								i += 1;
								t = "divi";
						}
						else if((h-j > j && (answer + h - j) / h <= k4) && (h - j >= k8 && last !== h - j)) {
								k = h - j;
								answer = answer + k;
								prob.push("plus " + k);
								i += 1;
								t = "divi";
						}
						else if(j >= k10 && j !== last){
							answer = answer - j;
							prob.push("minus " + j);
							i += 1;
							t = "divi";
						}
						// If nothing works, then subtract.
						else {
							t = "minus";
						}
					}
					else {
						t = "minus";
					}	
				}
				// Sometimes, we add or subtract.
				else {
					if(q % 2 === 0){
						if(answer > k13 && answer <=k5) {
							c = k6-answer;
							if(c > k7) {
								c = k7;
							}
							// Here, we try to add or subtract larger numbers within
							// the specified range for good play
							if(c - k8 > 5){
								f = c - 5;
							}
							else{ 
								f = k8;
							}
							b = getRand(f,c);
							t = "addi";
						}
						else if(answer <= k14){
							c = answer - 1;
							if(c >k9) { c = k9; }
							if(c - k10 > 5){
								f = c - 5;
							}
							else{
								f = k10;
							}
							h = getRand(f,c);
							t = "minus";
						}
						else {
							if(answer <=k5) {
								c = k6-answer;
								if(c > k7) {
									c = k7;
								}
								if(c - k8 > 5){
									f = c - 5;
								}
								else{ 
									f = k8;
								}
								b = getRand(f,c);
								t = "addi";
							}
							else {
								c = answer - 1;
								if(c >k9){ 
									c = k9;
								}
								if(c - k10 > 5){
									f = c - 5;
								}
								else{
									f = k10;
								}
								h = getRand(f,c);
								t = "minus";
							}
						}
					}
					else {
						if(answer <=k5) {
							// Sometimes we'll take any number from the specified range,
							// even small ones.
							c = k6-answer;
							if(c > k7) {
								c = k7;
							}
							b = getRand(k8,c);
							t = "addi";
						}
						else {
							c = answer - 1;
							if(c >k9) { c = k9; }
							h = getRand(k10,c);
							t = "minus";
						}
					}
				}
			}
			// If the answer is less or equal to k, we try to multiply or else we add or subtract
			else {
				if(answer <= k11){
					if(e === 0 && i > 1){
						f = k6/answer;
						g = Math.floor(f);
						if(g > k11) {
							g = k11;
						}
						b = getRand(k12,g);
						t = "multi";
					}
					else if(last % 3 === 0 && q % 2 === 0){ 
						f = k6/answer;
						g = Math.floor(f);
						if(g > k11) {
							g = k11;
						}
						// Here again, we are doing work to tilt the chosen values 
						// towards the larger numbers within the specified range.
						h = g - 3;
						if(h <= k12){
							h = k12;
						}
						b = getRand(h,g);
						t = "multi";
					}
					else if(prev < k2 && prev !== 0){
						f = k6/answer;
						g = Math.floor(f);
						if(g > k11) {
							g = k11;
						}
						h = g - 3;
						if(h <= k12){
							h = k12;
						}
						b = getRand(h,g);
						t = "multi";
					}
					else {
						b = getRand(k8,k7);
						t = "addi";
					}
				}
				else { 
					h = getRand(k10,k11);
					t = "minus";
				}
			}
			// if the value of t is set above, then we push the string onto prob[] 
			if(t === "divi"){
				prev = 0;
				answer = answer/h;
				last = h;
				prob.push("divided by " + h);
				d += 1;
				}
			else if(t === "minus"){
				last = h;
				prev = 2;
				answer = answer - h;
				prob.push("minus " + h);
			}
			else if(t === "addi"){
				last = b;
				prev = answer;
				answer = answer + b;
				prob.push("plus " + b);
			}
			else if(t === "multi"){
				last = b;
				prev = answer;
				e += 1;
				answer = answer * b;
				prob.push("multiplied by " + b);
			}
		}
		yourDisplayObject(prob,answer); // When the for loop is finished executing, we
						// output math problem array and the answer
						// to the function of your choice.
	}
	first();
	Indx = lob;
} //close coplexproblem()
// Use these values to run the function, and then break it.
// values for www.mathmataz.com 'The Big Four' level Three: cplxVars(10,30,5,15,15,45,5,12,4,9,4);
// values for www.mathmataz.com 'The Big Four' level Three: moreVars(5,15,3,9,33,45,15,5,15,5,9,3,25,20);

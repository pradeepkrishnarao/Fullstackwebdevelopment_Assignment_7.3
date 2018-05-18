	var i,val=0; //i and val initialized to 0
		for(i=1;i<=100;i++){
			val=val+1;
		/* output to the browser console the iteration value of integer i and the modulus of 3 as well as modulus of 5 equals to 0 in the for loop */
		if(val%3==0 && val%5==0){
			console.log(i+" FizzBuzz");
		}
		// output to the browser console the iteration value of integer i and the modulus of 3 equals to 0 in the for loop
		else if(val%3==0){
			console.log(i+" Fizz");
		}
		// output to the browser console the iteration value of integer i and the modulus of 5 equals to 0 in the for loop
		else if(val%5==0){
				console.log(i+" Buzz");
			}
		 // output to the browser console the iteration value of integer i in the for loop 
		else {
				console.log(i);
		}
	}
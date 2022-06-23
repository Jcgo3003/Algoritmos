let min = 1, max = 5;
let secret_number;

// secret_number = Math.floor(Math.random()*((max+1)-min)+min);
// console.log(`Secret number = ${secret_number}`);
// Manual Mode
secret_number = 3;
console.log(`Secret number = ${secret_number}`);

let answer = 0;
let counter = 0;

// Linear time complexity o(n)
function finder(secret_number){ 
	for(var i = min; i<=max; i++){
		counter++;
		answer = i;
		if(answer == secret_number){
			return answer;
		}
	}

}
finder(secret_number);

console.log(`Number of tries ${counter}`);
console.log(`The secret number is ${secret_number}`);

// Binary search | Time complexity logaritmit o(log)
console.log('\n- Binary search -');

function binary_search(header, secret_number, min, max){
	let history = '';
	let direction = '';
	let counter = 0;
	let jump = max;

	while(header != secret_number){

		if(header > secret_number){

			direction = 'd';
			if(direction != history){
				jump = Math.floor(jump/2);
			}
			header -= jump;
		}else if(header < secret_number){

			direction = 'i';
			if(direction != history){
				jump = Math.floor(jump/2);
			}
			header += jump;
		}

		history = direction;
		counter++;
	}
	return [header, counter];
}

let sol = binary_search(4, 7, 0, 10);
console.log(sol);

// Binary Search recursivo
console.log('\n- Binary search Recursive');


function finder_recursive(min, max, secret_number, counter){
	let answer = Math.floor((max + min)/2);
	if(answer == secret_number){
		counter ++;
		return [answer, counter];
	}

	if(answer > secret_number){
		counter++;
		console.log(`answer > secret  counter ${counter}`);
		return finder_recursive(min, answer-1, secret_number, counter)

	}
	else if(answer < secret_number){
		counter++;
		console.log(`answer < secret  counter ${counter}`);
		return finder_recursive(answer+1, max, secret_number, counter)
	}	
}

sol = finder_recursive(0, 10, 7, 0);
console.log(sol);
console.log(counter);
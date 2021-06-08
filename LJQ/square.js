const inputNum = prompt("Type a numer between 1-10");

if (inputNum >= 1 && inputNum <= 10) {
	document.write("The square of " + inputNum + " is " + inputNum * inputNum);
} else {
	document.write("Invalid number");
}


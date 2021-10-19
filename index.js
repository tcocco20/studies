//1. comments

//comments are for leaving notes for your code
//Anything written as a comment will not run on your command line.

// let x = 50

// x + 5 = y


//multi line comment
/* annotated by the "/*" closed with the opposite
asdfasd
asdfasd
asdf
*/


//2. Basic Data types - Strings
//strings are annotated with quotes
//They are used as words not objects
console.log("Hello Gonzo")

const message = 'hello'

//doesn't matter what quotes you use, if you need to display single quotes wrap
//string in double quotes and vise versa
const test = "Gonzalez's computer"
const quote = '"Do unto other as however you see fit or whatever man" - Jesus probably'

//strings have functions or methods that you can use when you add a period to the end of them
console.log(quote.toLocaleUpperCase())

//Doesn't have to use a variable
console.log("Hello".replace('H', "Y"))

//String Literals
//String literals are written with the back ticks "`"
const nam = 'Theo'
//lame old method
console.log('Hello ' + nam + ' from the function')
//string Literal method used to formatting strings better
console.log(`Hello ${nam} from the function`)

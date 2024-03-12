let string="chirag"
let string1="mokariya"
// console.log("name: "+string+"  surname: "+string1);
console.log(`name: ${string}  surname: ${string1}`);     //right way to print strings or any...

// onother way to declare string
const name1= new String('chirag')
console.log(name1);
console.log(name1[0]);

// methods
let str="mokariyachirag10@gmail.com"
console.log(str);      
console.log(str.length);                //give length of string
console.log(str.toLowerCase());         //convert to lowercase latter
console.log(str.toUpperCase());         //convert to uppercase latter
console.log(str.charAt(16));            // return the character to specific index number
console.log(str.indexOf('@'));          // return the index position to string 
console.log(str.substring(0,17));       // Returns the substring at the specified location within a String object.
console.log(str.slice(2,17));           // Returns a section of a string.
console.log(str.replace('gmail','yahoo'));     // Replaces text in a string, using a regular expression or search string.
console.log(str.includes('com'));      // Returns true if searchString appears as a substring otherwise return false
console.log(str.split('@'));  // Split a string into substrings using the specified separator and return them as an array.



let newstr="   hey frieds!!    "
console.log(newstr);
console.log(newstr.trim());   //Removes the leading and trailing white space and line terminator characters from a string.





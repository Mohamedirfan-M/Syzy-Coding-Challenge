//3. Find vowels in a word 
let word="Challenge"
let copy=word.toLowerCase() //If we give the input as camel case, snake case, pascal case it will convert that word into lowercase letters
var output="";  // to store the result 
let count=0;
for (let i = 0; i < copy.length; i++) {
    if(copy.charAt(i)=="a" || copy.charAt(i)=="e" || copy.charAt(i)=="i" || copy.charAt(i)=="o" || copy.charAt(i)=="u") //here i check if the character is vowel or not
    {
        count++  //increment the count to count how many vowels are there in the word
        output+=copy.charAt(i)+" " //output = output+wordTwo.charAt(i)+" " 
    }
}
console.log("Vowels Count: "+count); //displaying the count of vowels in the word
console.log("Vowels in the word: "+output); //displaying the vowels in the word
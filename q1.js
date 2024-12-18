//1. Longest Word from the given file/text
function findLongestWords(sentence) {
    const word = sentence.split(' ')  // Split the input text into an array of words using space as the seperator
    let longestWord = [] //Initialize an empty array to store the longest word
    let maxLength = 0 //Initialize a variable to find the length of the longest word

    for (let i=0;i<word.length;i++) {
        if (word[i].length > maxLength) {
            maxLength=word[i].length 
            longestWord =[word[i]]  //Replace the array with the new longest word
        } else if (word[i].length === maxLength) {
            longestWord.push(word[i]) //Add the current word to the array
        }
    }
    return longestWord;  //Return the array of the longest words
}
const sentence = "This is a coding challenge for the interview process"
console.log("Longest Word in the given sentence is: "+findLongestWords(sentence)) //Call the function and print the result

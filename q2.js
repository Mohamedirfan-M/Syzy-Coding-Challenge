//2. Given an array of integers. Find the largest sum of 3 integers
let arr =  [1,5,8,6,7,9,9,9] //initializing an array 
arr.sort()                        //here i am sorting the array elements in ascending order
arr.reverse()                     //here i am performing reverse operation on the sorted array
let duplicate = [...new Set(arr)] // removing duplicates
let result = duplicate[0]+duplicate[1]+duplicate[2]  //here i am storing the sum of first three elements in result variable
console.log("Largest Sum of Three Integers: ",result);  //displaying the result
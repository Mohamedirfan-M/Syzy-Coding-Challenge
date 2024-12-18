//4. Find intersection of two arrays
function findInterSection(arr1,arr2){ 
    let interSection = []                 //Create an empty array to store the common elements
    for(let i = 0; i < arr1.length; i++){
        if(arr1.includes(arr2[i])){       //Check if the current element of arr1 is also in arr2
            interSection.push(arr2[i])    //If it is there add it to the interSection array
        }
    }
    return interSection;                  //Return the array with the common elements
}
const arr1 = [1,2,3,4,5,6]
const arr2 = [1,3,5]
console.log("Intersection of two arrays:"); 
console.log(findInterSection(arr1,arr2));  //call the function and print the result
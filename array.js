//no 1
// Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older
function  getAgePeople(people) {
    return people.filter(d=>d.age >=18).map(d=>d.name);
    }; 
    const peopleAge = [{name: 'Alice',age: 17},
                    {name:'Eunice',age:22},
                    {name:'Charlie',age:14},
                    {name:'Max', age:19},
    
    ]; 
    
    console.log(getAgePeople(peopleAge));

// 2  
 // Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
 let array = [3,7,34,90,12];
let last = array[array.length-1];
console.log(last);


const arr2 = [true, "green", "where", 12, 56];
const findElement = arr2[arr2.length-1];
console.log(findElement);

//3
// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

let myPets = ["cow", "bird", "snake", "dog"];
let stringmyPets = myPets.join();
console.log(stringmyPets);

//4
//Write a JS script to sort the following string:let word = "sevink"

let word = (string) => {
  return string.split("").sort().join("")

 }
 console.log(word("sevink"));

 //5 
 // Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];

 var arr = ["apple","mango","apple","orange","mango","mango"];
 function removeDuplicate (data){
    return data.filter((value,index)=> data.indexOf(value)===index);
 }
   console.log(removeDuplicate(arr));




 // .map() creatAfter filtering it returns an array with the values that pass the filter. 

 // .filter The filter() method creates a new array filled with elements that pass a test provided by a function.


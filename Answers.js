Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
   
function sumMix(x){
   return x.reduce ((acc,val)=> acc + Number(val), 0);
   }
=====================================================
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
90 <= score <= 100 	'A' | 80 <= score < 90 	'B' |70 <= score < 80 	'C'| 60 <= score < 70 	'D'| 0 <= score < 60 	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;

  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}
=====================================================
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
  return sheep.filter(s => s === true).length;
}
=======================================================

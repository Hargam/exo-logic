// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


function find_sum(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
    }
    return result;
}


let arr = [1, 2, 3];
let target = 4;
console.log(find_sum(arr, target)); // [1, 3]
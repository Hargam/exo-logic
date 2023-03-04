// Question 1: Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20], make a function that organizes these into individual array that is ordered.For example answer(ArrayFromAbove) should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].Bonus: Make it so it organizes strings differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]


function clean_room(arr) {
    let num_arr = arr.filter(x => typeof x === 'number').sort((a, b) => a - b);
    let str_arr = arr.filter(x => typeof x === 'string').sort();
    let result = [];
    while (num_arr.length > 0) {
        let current_num = num_arr.shift();
        if (num_arr.length > 0 && current_num === num_arr[0]) {
            let temp_arr = [current_num];
            while (num_arr.length > 0 && current_num === num_arr[0]) {
                temp_arr.push(num_arr.shift());
            }
            result.push(temp_arr);
        } else {
            result.push(current_num);
        }
    }
    if (str_arr.length > 0) {
        result.push(str_arr);
    }
    return result;
}


let arr1 = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
console.log(clean_room(arr1)); // [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]

let arr2 = [1, "2", "3", 2];
console.log(clean_room(arr2)); // [[1, 2], ["2", "3"]]
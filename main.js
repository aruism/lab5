let column_1 = [4, 4, 4, 7, 3, 6, 2, 9, 8, 3, 7, 3, 1, 2, 2, 1, 1, 9, 7, 2, 6, 6,
    2, 3, 3, 4, 7, 9, 7, 4];
let column_2 = [5, 7, 4, 3, 4, 1, 1, 6, 7, 1, 2, 8, 3, 3, 1, 3, 7, 8, 6, 1, 4, 7,
    4, 4, 9, 8, 6, 5, 9, 7];
let column_3 = [66, 77, 76, 65, 67, 68, 66, 97, 52, 52, 86, 53, 76, 76, 68, 45, 67,
    45, 74, 40, 64, 64, 92, 80, 89, 52, 70, 55, 77, 45];
let column_4 = [66, 94, 41, 93, 69, 74, 68, 71, 59, 71, 88, 82, 58, 58, 79, 54, 46,
    81, 92, 58, 57, 90, 59, 70, 47, 94, 73, 74, 70, 61];


function findSum(column) {
    let sum = 0;
    for (let i = 0; i < column.length; i++) { 
     sum += column[i];
    }
    return sum;
}

let sum_1 = findSum(column_1);
let sum_2 = findSum(column_2);
let sum_3 = findSum(column_3);
let sum_4 = findSum(column_4);

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = findSum(sums);
  
const result = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,

    sums: sums,
    total_score: total_score,

}

console.log(result);
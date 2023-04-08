function doubledArr(arr, callback) {
    const doubledArr = [];
    for(let i = 0; i < arr.length; i++)
    {
        doubledArr.push(callback(arr[i]));
    }
    return doubledArr;
}

const arr = [3, 6, 9, 12, 15];
const doubledArray = doubledArr(arr, function(num) {
    return num * 2;
});

console.log(doubledArray);
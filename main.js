const moveZeroes = function(num){
    let left = 0;
    let right = 0;

    while(right < num.length){
        if(num[right] !== 0){
           [num[left], num[right]] =
           [num[right], num[left]];
           left++;
        }
        right++;
    }
    return num
}

console.log(moveZeroes([0, 1, 3, 4, 5]));
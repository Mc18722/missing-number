function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([1]));
console.log(findMissingNumber([0]));
console.log(findMissingNumber([4, 3, 2, 1, 0, 6]));
console.log(findMissingNumber([8, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([5, 3, 2, 1, 0, 4, 7]));

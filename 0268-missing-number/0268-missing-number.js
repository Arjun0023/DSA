/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let set = new Set(nums);
    for(let i = 0; i <=set.size; i++) {
        if(!set.has(i)) return i;
    }
    return set.size;
};
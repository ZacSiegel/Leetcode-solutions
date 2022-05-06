const numJewelsInStones = function(jewels, stones) {
    let total = 0
    let jewelsArr = jewels.split('')
    let stonesArr = stones.split('')
    for(let i =0; i < stonesArr.length; i++){
        if(jewelsArr.includes(stonesArr[i])){
            total++
        }
    }
    return total
};

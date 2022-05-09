const subtractProductAndSum = (n) => {

    let myFunc = function(n) {
        return Number(n);
    }
 
    let intArr = Array.from(String(n), myFunc);
    let product = intArr.reduce((acc, curr) => {
        return acc * curr
    })
    let sum = intArr.reduce((acc,curr) => {
        return acc + curr
    })
    
    return product - sum
};

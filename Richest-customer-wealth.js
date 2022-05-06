const sum = (balance) => {
    let total = 0
    for(let i = 0; i < balance.length; i++){
        total += balance[i]
    }
    return total
}

const maximumWealth = function(accounts) {
    let maxWealth = 0
    for(let customer of accounts){
        if (sum(customer) > maxWealth) {
            maxWealth = sum(customer)
        }
    }
    return maxWealth
};

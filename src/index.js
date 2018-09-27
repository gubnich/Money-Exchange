// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency < 0) return {};
    var error = {"error": "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency > 10000) return error;
    var coins = {
        "H":50,
        "Q":25,
        "D":10,
        "N":5,
        "P":1,
    }
    for(var item in coins){
        var nominal = coins[item];
        coins[item] = (currency - currency%nominal) / nominal;
        currency = currency - nominal * coins[item];
        if(coins[item] === 0) delete coins[item];
    }
    return coins;
}

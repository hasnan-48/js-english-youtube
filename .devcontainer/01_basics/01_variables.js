const accountId = 144553
let accountEmail = "hasnan@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

// accountId = 2// not allowed const diye variable
//  je name e declare korbo same name variable ar declare kora jabe na

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Ctg"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity , accountState])

const accountId=144553
let accountemail="suraj@gmail.com"
var accountpassword="12345"
accountCity="patna"

//accountId=2 //not allowed

accountemail="abc@email.com"
accountpassword="212121"
accountCity="goa"
let accountState;
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope

*/
console.table([accountId,accountemail,accountpassword,accountCity,accountState])
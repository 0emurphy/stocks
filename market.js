//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forcast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Gibratrar Industries", "Rock", "NASDAQ", 12.58, 1);
    let s2 = new Stock("The Asia Tigers Fund", "GRR", "NYSE", 32, 1);
    let s3 = new Stock("Dynamic Materials Corp", "BOOM", "NASDAQ", 21.15, 1);
    let s4 = new Stock("Avis Budget Group", "CAR", "NASDAQ", 34.58, 1);
    let s5 = new Stock("Brinker International", "EAT", "NYSE", 33.24, 1);
    let s6 = new Stock("ProShares Short", "DOG", "DOW 30", 15.82, 1);
    let s7 = new Stock("Comstock Mining Inc.", "LODE", "NYSE", 0.13, 383466)

    //build your Portfolio
    let myport = new Portfolio();
    myport.add(s1);
    myport.add(s2);
    myport.add(s3);
    myport.add(s4);
    myport.add(s5);
    myport.add(s6);
    myport.add(s7);

    console.log(myport.totalValue());
    console.log("----------------------------");
    console.log(myport);

    //build prediction
}

main();

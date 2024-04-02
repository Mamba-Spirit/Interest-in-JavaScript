function simulate_party(){
    const people = Math.floor(Math.random() * 101) +200;
    const demande = Math.ceil(people * 0.78);
    return demande;
}

function simulate_many_party(party_number){
    let drink_number = 0;
    for(let i = 0; i <= party_number; i++){
        drink_number += simulate_party();
    }
    const average_asking = drink_number/party_number;
    return average_asking;
}

var simulation_number = 10000;
var average_drink = simulate_many_party(simulation_number);
console.log("Average drink's number is : "+ average_drink);
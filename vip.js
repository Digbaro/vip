
let vipList = ["Tunde", "Sola", "AY", "Femi", "Tobi"];
let customerName = prompt("What is your name?");

if (vipList.includes(customerName)){
    let position = vipList.indexOf(customerName);
    alert("Welcome VIP! You are guest #"+ position + ". Free Entry.")
} else {
    let ticketNumber = prompt("what is your Ticket Number?; ")
    if (ticketNumber % 3 === 0 && ticketNumber && 5 === 0){
        console.log("Free Ticket.");
    }
    else if (ticketNumber % 3 === 0){
        console.log("60% off");
    } else {
        console.log("Full Price.")
    }
}
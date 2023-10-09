console.log("bank");

let btndeposit = document.getElementById("btn-deposit");
btndeposit.addEventListener("click", function() {
console.log("depositbtnclick");

let fielddeposit = document.getElementById("field-deposit");
let fielddeposits = fielddeposit.value;
console.log(fielddeposits);

fielddeposit.value = ""


let totaldeposit = document.getElementById("total-deposit")
let totaldeposits = totaldeposit.innerText;
console.log(totaldeposits);

let newdeposittotal = parseInt (totaldeposits) + parseInt (fielddeposits);

totaldeposit.innerText = newdeposittotal
console.log(newdeposittotal);

let totalbalance = document.getElementById("total-balance")
let totalbalances = totalbalance.innerText;
console.log(totalbalances);

let newtolal = parseInt (totalbalances) + parseInt (fielddeposits)
totalbalance.innerText =newtolal
console.log(newtolal);



});

let btwithdraw = document.getElementById("btn-withdraw");
btwithdraw.addEventListener("click", function() {
console.log("depositbtnclick");

let fieldwithdraw = document.getElementById("filed-withdraw");
let fieldwithdraws = fieldwithdraw.value;
console.log(fieldwithdraws);

fieldwithdraw.value = ""

let totalwithdraw = document.getElementById("total-withdraw")
let totalwithdraws = totalwithdraw.innerText;
console.log(totalwithdraws);

let newtotalwithdraw = parseInt (totalwithdraws) + parseInt (fieldwithdraws);

totalwithdraw.innerText = newtotalwithdraw ;
console.log(newtotalwithdraw);



let totalbalance = document.getElementById("total-balance")
let totalbalances = totalbalance.innerText;
console.log(totalbalances);

let newtolal = parseInt (totalbalances) - parseInt (fieldwithdraws)
totalbalance.innerText =newtolal
console.log(newtolal);

});
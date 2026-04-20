const button = document.querySelector("#btn"); 
button.addEventListener("click", calculate);

const tipButton = document.querySelector("#tip"); 
tipButton.addEventListener("click", showTip);

function showTip(e) {
e.preventDefault();
tipAmount.style.display = "block";
}

function calculate(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tips = document.querySelector("#tipAmount").value;
    if(bill === "" || people === "" || people < 1)  {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Enter your information!",
    });
    }

    let amountPerPerson = bill / people;
    let tipPerPerson = (bill * tips) / people;
    let TotalAmountPerPerson = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    TotalAmountPerPerson = TotalAmountPerPerson.toFixed(2); 

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#dividedTotal").textContent = TotalAmountPerPerson;
}




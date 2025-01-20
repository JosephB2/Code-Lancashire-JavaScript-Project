window.addEventListener("load", function () {
  handleFormSubmit();
});

function handleFormSubmit() {
  let form = document.getElementById("mortgage");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let formData = new FormData(form);
    let data = Object.fromEntries(formData.entries()); 

    getMortgageDetails(data); 
  });
}


/*
Repayment Mortgage
M = P [ i (1 + i)^n ] / [ (1 + i)^n – 1 ]

M represents the monthly payment
P is the principal (starting balance) of the loan
i is the monthly interest rate
n is the total number of payments (mortgage term in years multiplied by 12)

}
*/

function getMortgageDetails(userInput) {
  let startingBalance =(userInput.mortgage_amount);
  let annualInterestRate = (userInput.mortgage_interest) ;
  let termYears = (userInput.mortgage_length);

  let monthlyInterestRate = annualInterestRate / 100 / 12;
  let termMonths = termYears * 12;

  let monthlyPayment = startingBalance * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths)) / (Math.pow(1 + monthlyInterestRate, termMonths) - 1);
  let totalPayment = monthlyPayment * termMonths;
  let interestPaid = totalPayment - startingBalance;

    console.log("Monthly Payment:", monthlyPayment); 
    console.log("Total Payment:", totalPayment); 
    console.log("Interest Paid:", interestPaid); 

    document.getElementById("monthly_payment").innerHTML = monthlyPayment;
    document.getElementById("total_payment").innerHTML = totalPayment;
    document.getElementById("interest_paid").innerHTML = interestPaid;

};

/*
Interest Only Mortgage
*/
window.addEventListener("load", function() {
    let startingBalance = 45000; 
    let annualInterestRate = 3; 
    let termYears = 10;

    let monthlyInterestRate = annualInterestRate / 100 / 12;
    let termMonths = termYears * 12;

    let monthlyPayment = startingBalance * monthlyInterestRate / 12
    let totalPayment = monthlyPayment * termMonths;

    console.log("Monthly Payment:", monthlyPayment); 
    console.log("Total Payment:", totalPayment); 
});
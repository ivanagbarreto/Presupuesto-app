let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButtton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById ("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;



//set Budget
totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    //empty or negative input
    if(tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    } else {
        errorMessage.classList.add("hide");
        //set budget
        amount.innerHTML = tempAmount;
        //set balance
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        //clear input 
        totalAmount.value = "";
    }
})

//Fuction to disable Edit and delete button 
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(element => {
        element.disabled = bool;
    });
}
//Fuction to modify list elements
const modifyElement = (element,edit = false) =>{
    let parentDiv = element. parentElement;
    let currentBalance = balanceValue.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;

    if (edit) {
        let parentText = parentDiv.querySelector(".product").innerText;
        productTitle.value = parentText;
        userAmount.value = parentAmount;
        disableButtons(true);   
    }
    balanceValue.innerText = parseInt(currentBalance) + parseInt (parentAmount);
    expenditureValue.innerText = parseInt (currentExpense) - parseInt (parentAmount);
    parentDiv.remove();
};
//Function to create list
const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content","flex-space");
    list.appendChild(sublistContent);
   sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
   leteditButton = document.createElement("button");
   editButton.classList.add("fa-solid","fa-pen-to-square","edit");
   editButton.style.fontSize = "24px";
   editButton.addEventListener("click", () =>{
    modifyElement(editButton, true);
   });
   let deleteButton = document.createElement("button");
   deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
   deleteButton
};
//Variables for table header columns
let date = document.getElementById("inputForDateOfExpense");
let expenseDescription = document.getElementById(
  "inputForDescriptionOfExpense"
);
let amount = document.getElementById("inputForAmount");
let purchaseLocation = document.getElementById("inputForLocationOfPurchases");

//Buttons
const submitBtn = document.getElementById("submitBtn");
const delBtn = document.createElement("button");
delBtn.setAttribute("id", "delete-btn");
delBtn.innerText = "X";

//submit button
submitBtn.addEventListener("click", function () {
  if (
    date.value === null ||
    expenseDescription.value === "" ||
    amount.value === null ||
    purchaseLocation.value === ""
  ) {
    alert("Please Fill All Required Field");
    return false;
  }

  //How do I keep adding columns underneath each other maybe I need to add an id to a tr tag? Imma continue in html file
  const firstColumn = document.getElementById("firstColumn");
  firstColumn.innerHTML = `<p>${date.value}</p>`;
  //   firstColumn.style.display = "block"
  //   firstColumn.textContent = date.value;
  //   console.log(date.value);

  const secondColumn = document.getElementById("secondColumn");
  secondColumn.innerHTML = `<p>${expenseDescription.value}</p>`;
  //   secondColumn.style.display = "block"
  //   secondColumn.textContent = expenseDescription.value;
  //   console.log(expenseDescription.value);

  const thirdColumn = document.getElementById("thirdColumn");
  thirdColumn.innerHTML = `<p>$${amount.value}</p>`;
  //   thirdColumn.style.display = "block"
  //   thirdColumn.textContent = amount.value;
  //   console.log(amount.value);

  const fourthColumn = document.getElementById("fourthColumn");
  fourthColumn.innerHTML = `<p>${purchaseLocation.value}</p>`;
  //   fourthColumn.style.display = "block"
  //   fourthColumn.textContent = purchaseLocation.value;
  //   console.log(purchaseLocation.value);

  const fifthColumn = document.getElementById("fifthColumn");
  //   fifthColumn.appendChild(delBtn);

  //delete button
  let btnClicked = false;
  //   console.log(btnClicked);
  delBtn.addEventListener("click", function () {
    btnClicked = true;
    // console.log(btnClicked);
    if (btnClicked === false) {
      //display everything
      firstColumn.style.display = "inline";
      secondColumn.style.display = "inline";
      thirdColumn.style.display = "inline";
      fourthColumn.style.display = "inline";
      fifthColumn.style.display = "inline";
    } else if (btnClicked === true) {
      //display nothing
      firstColumn.style.display = "none";
      secondColumn.style.display = "none";
      thirdColumn.style.display = "none";
      fourthColumn.style.display = "none";
      fifthColumn.style.display = "none";
    }
  });

  // clears input field
  date.value = "";
  expenseDescription.value = "";
  amount.value = "";
  purchaseLocation.value = "";
});

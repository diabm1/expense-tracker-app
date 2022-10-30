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

const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");

const row = document.createElement("tr");

const header = document.createElement("th");
const header1 = document.createElement("th");
const header2 = document.createElement("th");
const header3 = document.createElement("th");

header.append("Date:");
header1.append("Expense Description:");
header2.append("Amount:");
header3.append("Location of Purchase:");

row.appendChild(header);
row.appendChild(header1);
row.appendChild(header2);
row.appendChild(header3);

tblBody.appendChild(row);
// }

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
document.body.appendChild(tbl);

tbl.setAttribute("border", "2");
tbl.style.marginLeft = "auto"
tbl.style.marginRight = "auto"
// tbl.setAttribute("align", "center");

//submit button
submitBtn.addEventListener("click", function () {
    if (
      date.value === "" ||
      expenseDescription.value === "" ||
      amount.value === null ||
      purchaseLocation.value === ""
    ) {
      alert("Please Fill All Required Field");
      return false;
    }

  // const innerTd = document.createElement("td")
  // innerTd.id = "coumns"
  //   innerTd.innerHTML =`<p>${date.value}</p>`;
  //   innerTd.innerHTML =`<p>${expenseDescription.value}</p>`;
  //   innerTd.innerHTML =`<p>$${amount.value}</p>`;
  //   innerTd.innerHTML =`<p>${purchaseLocation.value}</p>`;

  // const innerTr = document.createElement("tr")
  // innerTr.id = "newRow"
  // innerTr.appendChild(innerTd)

  // const tBody = document.createElement("tbdoy")
  // tBody.appendChild(innerTr)

  // const innerTable = document.getElementById("innerTable")
  // innerTable.appendChild(tBody)

  //How do I keep adding columns underneath each other maybe I need to add an id to a tr tag? Imma continue in html file
  //   const firstColumn = document.getElementById("firstColumn");
  //   firstColumn.innerHTML = `<p>${date.value}</p>`;
  //   firstColumn.style.display = "block"
  //   firstColumn.textContent = date.value;
  //   console.log(date.value);

  //   const secondColumn = document.getElementById("secondColumn");
  //   secondColumn.innerHTML = `<p>${expenseDescription.value}</p>`;
  //   secondColumn.style.display = "block"
  //   secondColumn.textContent = expenseDescription.value;
  //   console.log(expenseDescription.value);

  //   const thirdColumn = document.getElementById("thirdColumn");
  //   thirdColumn.innerHTML = `<p>$${amount.value}</p>`;
  //   thirdColumn.style.display = "block"
  //   thirdColumn.textContent = amount.value;
  //   console.log(amount.value);

  //   const fourthColumn = document.getElementById("fourthColumn");
  //   fourthColumn.innerHTML = `<p>${purchaseLocation.value}</p>`;
  //   fourthColumn.style.display = "block"
  //   fourthColumn.textContent = purchaseLocation.value;
  //   console.log(purchaseLocation.value);

  //   const fifthColumn = document.getElementById("fifthColumn");
  //   fifthColumn.appendChild(delBtn);

  //delete button
  //   let btnClicked = false;
  //   console.log(btnClicked);
  //   delBtn.addEventListener("click", function () {
  //     btnClicked = true;
  //     // console.log(btnClicked);
  //     if (btnClicked === false) {
  //       //display everything
  //       firstColumn.style.display = "inline";
  //       secondColumn.style.display = "inline";
  //       thirdColumn.style.display = "inline";
  //       fourthColumn.style.display = "inline";
  //       fifthColumn.style.display = "inline";
  //     } else if (btnClicked === true) {
  //       //display nothing
  //       firstColumn.style.display = "none";
  //       secondColumn.style.display = "none";
  //       thirdColumn.style.display = "none";
  //       fourthColumn.style.display = "none";
  //       fifthColumn.style.display = "none";
  //     }
  //   });

  // clears input field

  // function generateTable() {
  // creates a <table> element and a <tbody> element
  // const tbl = document.createElement("table");
  // const tblBody = document.createElement("tbody");

  // creating all cells
  // for (let i = 0; i < 2; i++) {
  // creates a table row
  const row1 = document.createElement("tr");

  //   for (let j = 0; j < 2; j++) {
  // Create a <td> element and a text node, make the text
  // node the contents of the <td>, and put the <td> at
  // the end of the table row

  const cell = document.createElement("td");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const cellText = document.createTextNode(`${date.value}`);
  const cellText1 = document.createTextNode(`${expenseDescription.value}`);
  const cellText2 = document.createTextNode(`$ ${amount.value}`);
  const cellText3 = document.createTextNode(`${purchaseLocation.value}`);
  cell.appendChild(cellText);
  cell1.appendChild(cellText1);
  cell2.appendChild(cellText2);
  cell3.appendChild(cellText3);
  row1.appendChild(cell);
  row1.appendChild(cell1);
  row1.appendChild(cell2);
  row1.appendChild(cell3);

  //   }

  // add the row to the end of the table body
  // tblBody.appendChild(row);
  tblBody.appendChild(row1);
  // }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  // tbl.setAttribute("border", "2");
  // tbl.setAttribute("align", "center");
  // }

  date.value = "";
  expenseDescription.value = "";
  amount.value = "";
  purchaseLocation.value = "";
});

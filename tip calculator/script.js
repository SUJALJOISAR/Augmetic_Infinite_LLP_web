// calculate the tips
//validate input field
//show result div
//hide basic info div

//reset calculator
//make input field empty
//hide result div
//show basic info div

function CalculateTips() {
  var Bill = document.getElementById("inputBill").value;
  var Tips = document.getElementById("inputTips").value;
  var Person = document.getElementById("inputPerson").value;

  if (ValidateTipCalculatorForm(Bill, Tips, Person)) {

    Bill=Number(Bill);
    Tips=Number(Tips);
    Person=Number(Person);


    _cmnRemoveAllErrorMessage();
    var TotalBill, TotalTips, PerPersonTips;

    TotalTips = (Tips / 100) * Bill;
    TotalBill = TotalTips + Bill;
    PerPersonTips = TotalBill / Person;

    _cmnHideElement("OutputInfo"); //will hide our basic div
    _cmnShowElement("OutputResult", "flex"); //will show our result div

    // document.getElementById("bill").innerHTML = Bill;
    // document.getElementById("tip").innerHTML = Tips;
    // document.getElementById("person").innerHTML = Person;

    SetTipResult("bill", (Bill.toFixed(2)));//to use Math function first convert all variables into Number datatype bacuase default datatype is string 
    SetTipResult("tip", Tips);
    SetTipResult("person", Person);
    SetTipResult("totalTips",(TotalTips.toFixed(2)));
    SetTipResult("totalBill", (TotalBill.toFixed(2)));
    SetTipResult("perPersonBill", (PerPersonTips.toFixed(2)));
  }
}

function ResetTipCalculator() {
    if (confirm("Are you Sure Want to reset the calculator?")) {
      document.getElementById("inputBill").value = "";
      document.getElementById("inputTips").value = "";
      document.getElementById("inputPerson").value = "";

      _cmnRemoveAllErrorMessage();
      _cmnHideElement("OutputResult"); //will hide our OutputResult div
      _cmnShowElement("OutputInfo", "flex"); //will show our OutputInfo div

      SetTipResult("bill","0");
      SetTipResult("tip","0");
      SetTipResult("person","0");
      SetTipResult("totalTips","0");
      SetTipResult("totalBill","0");
      SetTipResult("perPersonBill","0");
    }
  }

function SetTipResult(elementId, value) {
  document.getElementById(elementId).innerHTML = value;
}

function ValidateTipCalculatorForm(Bill, Tips, Person) {
  if (Bill <= 0 || _cmnIsInputFieldEmpty(Bill)) {
    _cmnShowErrorMessageBottomOfTheInputField( "inputBill","Please enter the valid Bill.");
    // alert("Please enter valid Bill.");
    return false;
  }

  if (Tips <= 0  || _cmnIsInputFieldEmpty(Tips)) {
    _cmnShowErrorMessageBottomOfTheInputField("inputBill", "Please enter the valid Tip."
    );
    // alert("Please enter valid Tip.");
    return false;
  }

  if (Person <= 0 || _cmnIsInputFieldEmpty(Person)) {
    _cmnShowErrorMessageBottomOfTheInputField( "inputBill","Please enter the valid Person."
    );
    // alert("Please enter valid Person.");
    return false;
  }
  return true;
}



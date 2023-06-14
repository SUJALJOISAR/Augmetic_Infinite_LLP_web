function _cmnShowErrorMessageBottomOfTheInputField(fieldID, errorMessage) {
    var inputField = document.getElementById(fieldID);
    inputField.classList.add("tool-error-border"); //add border
    inputField.focus(); //focus error field
  
    var errorMessageElement = document.createElement("p"); //create a p tag for error message
    errorMessageElement.innerHTML = errorMessage; //set the error message in the p tag
    errorMessageElement.classList.add("tool-error-message"); //add the error message style class
    inputField.parentNode.insertBefore(
      errorMessageElement,
      inputField.nextSibling
    ); //set the error message under the error field
  }
  
  function _cmnRemoveAllErrorMessage(){
      var allErrorBorder = document.getElementsByClassName('tool-error-border');
      var allErrorMessage = document.getElementsByClassName('tool-error-message');
      var i;
  
      //remove border
      for(i=(allErrorBorder.length)-1;i>=0;i--){
          allErrorBorder[i].classList.remove('tool-error-border');
      }
  
      //remove error message
      for(i=(allErrorMessage.length)-1;i>=0;i--){
          allErrorMessage[i].remove();
      }
  }
  
  function _cmnHideElement(elementId) {
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if (selectedDisplayValue != "none") {
      document.getElementById(elementId).style.display = "none";
    }
  }
  
  function _cmnShowElement(elementId, displayName) {
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if (selectedDisplayValue != displayName) {
      document.getElementById(elementId).style.display = displayName;
    }
  }
  
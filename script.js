const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
  } else {
    console.log(validatePhoneNumber(userInput));
    resultsDiv.textContent = validatePhoneNumber(userInput);
  }
})

clearButton.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
})

const validatePhoneNumber = (userInput) => {
  const phoneNumber = userInput.value;
  const validPhoneNumberFormats = [
    /^1\s\d{3}-\d{3}-\d{4}$/,
    /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1\s\d{3}\s\d{3}\s\d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/
  ];
  
  const isValidPhoneNumber = validPhoneNumberFormats.some((element, index, array) => element.test(phoneNumber));
  console.log(isValidPhoneNumber);
  if (isValidPhoneNumber) {
    return `Valid US number: ${phoneNumber}`;
  } else {
    return `Invalid US number: ${phoneNumber}`;
  }
}
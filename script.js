const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const storeInput = textInput.value.trim(); // Trim any extra spaces from input
  const compareInput = storeInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(); // Remove non-alphanumeric chars and convert to lowercase
  const reversedInput = compareInput.split("").reverse().join(""); // Reverse the string

  if(storeInput.value.lenght>0){
    if (compareInput === reversedInput) {
        result.textContent = `${storeInput} is a palindrome`;
        result.className = "success"; // Apply success class (green color)
      } else {
        result.textContent = `${storeInput} is not a palindrome`;
        result.className = "error"; // Apply error class (red color)
      }
  }
  else{
    alert("Please input a value")
  }
  textInput.value = '';
});
/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {

  const hours = timeString.split(':')[0];
  const parsed = parseInt(hours, 10);
  if (parsed < 12) {
    return "Good Morning";
  } else if (parsed < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
  /* Write your implementation of displayMessage() */



  function displayMessage(message) {
    const content = document.getElementById('greeting')
    content.textContent = message;
  }
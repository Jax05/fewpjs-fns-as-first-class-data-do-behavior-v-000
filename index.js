/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const timeArray = timeString.split(":")
  const hour = parseInt(timeArray[0])

  if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon")
  }else if (hour >= 17) {
    console.log("Good Evening")
  }else if (hour < 12) {
    console.log("Good Morning")
  }
}
/* Write your implementation of displayMessage() */

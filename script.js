//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Helper function to create a delay using Promise
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Async function triggered on button click
btn.addEventListener("click", async () => {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  // Optional: clear previous output immediately
  output.textContent = "";

  // Wait for the user-specified delay
  await wait(delay);

  // Then display the message
  output.textContent = message;
});

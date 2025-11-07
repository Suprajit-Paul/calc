const outputDiv = document.querySelector("#output-div");

const buttonsDiv = document.querySelector(".buttons");

const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  "Clear",
  "Backspace",
  "=",
];

buttons.forEach((button) => {
  const b = document.createElement("button");
  b.classList.add("button");
  b.textContent = button;
  buttonsDiv.appendChild(b);
});

const btnArray = document.querySelectorAll(".button");

btnArray.forEach((btn) => {
  btn.addEventListener("click", function () {
    try {
      const buttonText = btn.textContent;
      currText = outputDiv.textContent;
      if (buttonText === "Clear") outputDiv.textContent = "";
      else if (buttonText === "Backspace") {
        if (
          currText === "ERROR!" ||
          currText === "Infinity" ||
          currText === "-Infinity"
        )
          outputDiv.textContent = "";
        else outputDiv.textContent = currText.substring(0, currText.length - 1);
      } else if (buttonText === "=") {
        const x = eval(currText);
        outputDiv.textContent = x.toString();
      } else if (currText.length === 0) outputDiv.textContent = `${buttonText}`;
      else outputDiv.textContent = `${currText}${buttonText}`;
    } catch (err) {
      console.log(err);
      outputDiv.textContent = "ERROR!";
    }
  });
});
 

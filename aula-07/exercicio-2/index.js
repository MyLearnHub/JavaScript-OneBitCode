function generateRandomNumber() {
  const min = 1;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const formattedNumber = randomNumber.toString().padStart(6, "0");
  document.getElementById("randomNumber").textContent = formattedNumber;
}

generateRandomNumber();

setInterval(generateRandomNumber, 10000);

document.getElementById("addToCartBtn").addEventListener("click", function () {
  const messageContainer = document.getElementById("messageContainer");

  const message = document.createElement("div");
  message.className = "message";
  message.textContent = "Item adicionado ao carrinho!";

  messageContainer.appendChild(message);

  setTimeout(() => {
    messageContainer.removeChild(message);
  }, 5000);
});

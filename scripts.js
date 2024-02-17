document.addEventListener("DOMContentLoaded", function() {
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  for (const message of savedMessages) {
    document.querySelector(".message").innerHTML += `<p class='message-js'>${message}</p>`;
  }
});

function sendMessage() {
  const input = document.querySelector("input");
  const message = input.value;
  document.querySelector(".message").innerHTML += `<p class='message-js'>${message}</p>`;
  input.value = "";
  
  const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  savedMessages.push(message);
  localStorage.setItem('messages', JSON.stringify(savedMessages));
}

function eventKey(event) {
  if (event.key === `Enter`){
    sendMessage();
  }
}

const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-btn");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        displayMessage("You", messageText);
        messageInput.value = "";
        simulateIncomingMessage();
    }
}

function displayMessage(user, text) {
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.innerHTML = `<strong>${user}:</strong> ${text}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


function simulateIncomingMessage() {
    setTimeout(() => {
        const simulatedMessages = [
            "Hi! How can I help you with your crops?",
            "Hybrid seeds are great for productivity.",
            "I recommend rotating crops every season."
        ];
        const randomMessage = simulatedMessages[Math.floor(Math.random() * simulatedMessages.length)];
        displayMessage("Farmer Friend", randomMessage);
    }, 2000);
}


displayMessage("Farmer1", "Hello, I need advice on hybrid seeds.");
displayMessage("Farmer2", "Rotating crops can be very effective.");

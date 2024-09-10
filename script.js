// Business Listing Data
const businesses = [
  { id: 1, name: "Business 1", description: "Description 1" },
  { id: 2, name: "Business 2", description: "Description 2" },
  { id: 3, name: "Business 3", description: "Description 3" },
  // Add more businesses here...
];

// Populate Business Listing
const businessList = document.getElementById("business-list");
businesses.forEach((business) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${business.name} - ${business.description}`;
  businessList.appendChild(listItem);
});

// Chatbot Algorithm Integration
const chatbotContainer = document.getElementById("chatbot-container");
const chatbotHeader = document.createElement("div");
chatbotHeader.className = "chatbot-header";
chatbotHeader.textContent = "Township Small Business Chatbot";
chatbotContainer.appendChild(chatbotHeader);

const chatbotMessages = document.createElement("div");
chatbotMessages.className = "chatbot-messages";
chatbotContainer.appendChild(chatbotMessages);

// Add chatbot message function
function addChatbotMessage(message, sender) {
  const chatbotMessage = document.createElement("div");
  chatbotMessage.className = `chatbot-message ${sender}`;
  chatbotMessage.textContent = message;
  chatbotMessages.appendChild(chatbotMessage);
}

// Example chatbot interaction
addChatbotMessage("Hello! How can I assist you today?", "bot");
addChatbotMessage("Hi! I need help with business registration.", "user");
addChatbotMessage("Sure, I can guide you through the process. Please provide more details.", "bot");

// Add more chatbot logic and interactions here...

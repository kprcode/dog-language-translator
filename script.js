const dogKeywords = [
  { keywords: ["wagging", "tail"], response: "🐕 Your dog is happy and excited!" },
  { keywords: ["bark", "barking"], response: "🔊 Your dog might be alerting you or feeling threatened." },
  { keywords: ["whine", "whining"], response: "😢 Your dog could be anxious or needing attention." },
  { keywords: ["lick", "licking", "face"], response: "💖 It's a sign of affection and trust!" },
  { keywords: ["dig", "digging"], response: "⛏️ Your dog might be searching for something or feeling playful." },
  { keywords: ["roll", "back"], response: "🛏️ Total relaxation! Your dog trusts you." },
  { keywords: ["jump", "jumping"], response: "🎉 Excited or wants to play!" },
  { keywords: ["growl", "growling"], response: "😠 Feeling defensive or uncomfortable." },
  { keywords: ["stare", "staring"], response: "👀 Your dog is observing something closely or waiting for you." },
  { keywords: ["pant", "panting"], response: "🌡️ Could be excited, hot, or a little stressed." },
  { keywords: ["howl", "howling"], response: "🎶 Trying to communicate with others or responding to a sound." },
  { keywords: ["yawn", "yawning"], response: "😴 Might be tired or just feeling a little stressed!" },
  { keywords: ["raise", "paw"], response: "🤔 Your dog is curious or asking for attention!" },
  { keywords: ["bite", "biting"], response: "🩹 Might be itchy, uncomfortable, or stressed." }
];

const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");
const translateBtn = document.getElementById("translate-btn");

function addMessage(text, sender = "bot") {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";

  if (sender === "user") {
    bubble.classList.add("user-bubble");
    bubble.innerHTML = `<strong>You:</strong> ${text}`;
  } else {
    bubble.innerHTML = `<strong>Dog Translator:</strong> ${text}`;
  }

  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function detectDogAction(text) {
  const input = text.toLowerCase();

  for (const item of dogKeywords) {
    if (item.keywords.some(kw => input.includes(kw))) {
      return item.response;
    }
  }

  return "🤷 Hmm, I’m not sure! Maybe your dog is expressing something unique.";
}

function translateAction() {
  const userText = inputField.value.trim();
  if (!userText) return;

  addMessage(userText, "user");
  const response = detectDogAction(userText);
  addMessage(response, "bot");

  inputField.value = "";
  inputField.focus();
}

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") translateAction();
});

translateBtn.addEventListener("click", translateAction);

window.addEventListener("DOMContentLoaded", () => {
  addMessage("👋 Hi there! I'm your Dog Language Translator.");
  
  setTimeout(() => {
    addMessage('🐾 Just describe your dog\'s behavior (like "my dog is barking" or "she\'s wagging her tail") and I’ll tell you what it means!');
  }, 600);
});
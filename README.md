# 🌐 WhatsApp AI Chatbot

Simple yet powerful WhatsApp chatbot built with **whatsapp-web.js** using OpenAI’s GPT-3.5-turbo model. It replies only to a specified target user, keeps per-user chat context, and generates friendly, concise responses.

---

## ☠️ Features

- Easy WhatsApp Web login via QR code  
- User-based chat context management  
- AI responses powered by OpenAI GPT-3.5-turbo  
- Replies exclusively to messages from a configured phone number  
- Limits chat history to 25 messages for performance  
- Clean shutdown and resource cleanup on exit  

---

## 📚 Installation

1. Make sure you have **Node.js** installed  
2. Clone this repo or download the project files  
3. In the project folder, run:

```bash
npm install whatsapp-web.js qrcode-terminal node-fetch
```
4.Run the bot with the target user phone number as an argument (include country code, no plus). Example:
```bash
    node index.js 905551112233
```
---
## 🛠️ Usage
-Scan the QR code displayed in the terminal to log in to WhatsApp
-The bot listens and responds only to messages from the specified target number
-Messages are sent to OpenAI and answers are returned based on the ongoing chat context
-Chat context stores up to 25 messages to keep responses relevant and fast
-Bot gracefully disconnects and cleans up on termination

## ☠️ Notes
-Replace the `API_KEY` variable in `index.js` with your own OpenAI API key
-Responses are limited to about 50 words, friendly and straightforward
-Messages from other users are ignored

---












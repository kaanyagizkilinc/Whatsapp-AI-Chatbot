# 🌐WhatsApp AI Chatbot
===================

This project is a simple yet powerful WhatsApp chatbot built with **whatsapp-web.js** that uses OpenAI's GPT-3.5-turbo model to generate AI-powered responses. It replies only to messages from a specified target user, maintains per-user chat context, and produces friendly, concise answers.

##Features
--------

*   Easy WhatsApp Web login via QR code
    
*   User-based chat context management
    
*   AI responses powered by OpenAI GPT-3.5-turbo
    
*   Replies exclusively to messages from a configured phone number
    
*   Limits chat history to 25 messages for performance
    
*   Clean shutdown and resource cleanup on exit
    

## 📚Installation
------------

1.  Make sure you have Node.js installed
    
2.  Clone the repo or download the project files
    
3.  In the project folder, run:
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashKopyalaDüzenlenpm install whatsapp-web.js qrcode-terminal node-fetch   `

1.  Run the bot with the target user phone number as an argument (include country code, no plus):
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashKopyalaDüzenlenode index.js 905551112233 //Chosen phone number format   `

## 🛠️Usage
-----

*   Scan the QR code displayed in the terminal to log in to WhatsApp
    
*   The bot will listen and respond only to messages from the specified target number
    
*   Messages are sent to OpenAI and answers are returned based on the ongoing conversation context
    
*   The chat context stores up to 25 messages to keep interactions relevant and fast
    
*   Bot gracefully disconnects and cleans up on termination
    

## ☠️Notes
-----

*   Replace the API\_KEY variable in index.js with your own OpenAI API key
    
*   Responses are limited to about 50 words, friendly and straightforward
    
*   Messages from any other users are ignored
    

##❗License
-------

MIT License

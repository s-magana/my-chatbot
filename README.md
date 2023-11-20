# My Chatbot
Need a question answered quickly? Use a personalized ChatGPT-powered chatbot right at the access of your terminal.

https://github.com/s-magana/my-chatbot/assets/113574110/522c733c-1c08-4c2b-82ef-cd4043a05206

## How It's Made:

**Tech used:** JavaScript, Node.js

I began this project by first connecting to the API using a personalized API key provided by OpenAI. Now able to send requests to the API, I made sure to send these requests using user input and receive a response with content. With the ability to have a simple question and answer working, I then decided to store the chat history with the bot and have that history be sent with each request. The reason for this is to allow having a conversation with the bot and not have to repeat info that has been already stated before. To finish off, I differentiated the user input and chatbot response with their own colors in order to make everything more legible.

## Optimizations

If I were to improve this app, I would create a front-end option, making this a completely full-stack project. Although I do personally like the idea of having my own chatbot that is easily accessible in my terminal, I would also like to have a front-end alternative for those who prefer that. 

## Lessons Learned:

At the end of building this project, I was able to learn so many new things. Working with an API as advanced and significant as OpenAI's, I improved my understanding of new documentation and the various opportunities this API provides. Overall, I really enjoyed learning about the underlying mechanism of how ChatGPT works.

## Install:
'npm install'

## Things to Add:
- Create an '.env' file in the config folder and add the following as 'key = value'
    - OPENAI_API_KEY = 'your openai api key'

## Run:
'npm start'

## Examples:
Take a look at these other examples that I have in my portfolio:

**Yestoday:** https://github.com/s-magana/yestoday

**Overwrapped:** https://github.com/s-magana/overwrapped

**Buy2k:** https://github.com/s-magana/buy2k

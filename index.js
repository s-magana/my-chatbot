const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");
const colors = require("colors");
require("dotenv").config({ path: "./config/.env" });

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


async function main() {
    console.log(colors.bold.green("Welcome to your personal chatbot!"));
    console.log(colors.bold.green("Start chatting with your bot."));

    const chatHistory = [];

    while (true) {
        const userInput = readlineSync.question(colors.blue("You: "));

        try {
            // Iterate over history to form messages
            const messages = chatHistory.map(([role, content]) => ({ role, content }));

            // Add most recent user input
            messages.push({ role: "user", content: userInput });

            // Make request to API using user input 
            const chatCompletion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: messages,
                temperature: 0,
            });

            // Get back a response with content
            const completionContent = chatCompletion.data.choices[0].message.content

            if (userInput.toLowerCase() === "exit") {
                console.log(colors.magenta("Bot: ") + completionContent);
                return; 
            }

            console.log(colors.magenta("Bot: ") + completionContent);

            // Update history with user input and assistant response
            chatHistory.push(["user", userInput]);
            chatHistory.push(["assistant", completionContent]);
        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();
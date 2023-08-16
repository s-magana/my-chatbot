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

    while (true) {
        const userInput = readlineSync.question(colors.brightBlue("You: "));

        try {
            // Make request to API using user input 
            const chatCompletion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "user", content: userInput }
                ],
                temperature: 0,
            });

            // Get back a response with content
            const completionContent = chatCompletion.data.choices[0].message.content

            if (userInput.toLowerCase() === "exit") {
                console.log(colors.magenta("Bot: ") + completionContent)
                return; 
            }

            console.log(colors.magenta("Bot: ") + completionContent)
        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();
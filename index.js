const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config({ path: "./config/.env" });

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


async function main() {
    const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: "What color is Kirby?"}
        ],
        temperature: 0,
    });

    console.log(chatCompletion.data.choices[0].message.content);
}

main();
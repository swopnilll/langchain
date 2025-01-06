// Import the required module
import {OpenAI} from 'openai'


// Add key here
let openai_api_key = "";

// Instantiate the OpenAI client
const openai = new OpenAI({ apiKey: openai_api_key });

// Function to perform classification
const classify = async (user_input) => {

    // Use chat completions from OpenAI and pass the prompt and input
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // LLM Model to use
        messages: [
            {
                "role": "system",
                "content": `You will be provided with a piece of text.
                            Your task is to classify it to one of the three categories:
                            1. Sports
                            2. Entertainment
                            3. Unknown
                            If you do not know the category, respond as Unknown always instead of randomly answering .`
            },
            {
                "role": "user",
                "content": user_input
            }
        ]
    });

    console.log(`Input: ${user_input}\nCategory: ${response.choices[0].message.content}\n`)
}

// Used the immediately invoked function expression
(async () => {
    const user_input_entertainment = "I loved the Avengers movie so much!!"

    const user_input_sports = "Football is one of the popular games played in the world."

    const user_input_unknown = "I am working so hard."

    await classify(user_input_entertainment)

    await classify(user_input_sports)
    
    await classify(user_input_unknown)
})();
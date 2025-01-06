// Import the required module
const { OpenAI } = require("openai");

// Add key here
let openai_api_key = "";

// Instantiate the OpenAI client
const openai = new OpenAI({ apiKey: openai_api_key });

// Function to perform sentiment analysis
const analyze_sentiment = async (user_input) => {

    // Use chat completions from OpenAI and pass the prompt and input
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": `You will be provided with a piece of text.
                            Your task is to classify its sentiment as Positive, Neutral, or Negative.
                            The output should only contain the type of sentiment.`
            },
            {
                "role": "user",
                "content": user_input
            }
        ]
    });

    console.log(`Input: ${user_input}\nSentiment: ${response.choices[0].message.content}\n`)
}

// Used the immediately invoked function expression
(async () => {
    const positive_text = "Just finished the best pizza ever! So satisfied! "
    const negative_text = "This traffic is insane! How much longer will it take?"
    const neutral_text = "I am going to the market"
    await analyze_sentiment(positive_text)
    await analyze_sentiment(negative_text)
    await analyze_sentiment(neutral_text)
})();
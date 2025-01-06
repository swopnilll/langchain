// Import the required package
import natural from "natural"

// Create a Naive Bayes classifier object
const classifier = new natural.BayesClassifier();

// Train the classifier with sample data (sentiment, text)
classifier.addDocument("The new software architecture is very scalable and efficient.", "positive");
classifier.addDocument("The performance improvements in the latest version are impressive.", "positive");
classifier.addDocument("This AI model has significantly reduced the time for data processing.", "positive");
classifier.addDocument("The new algorithm implementation made the system much faster.", "positive");
classifier.addDocument("I’m excited about the new advancements in quantum computing.", "positive");
classifier.addDocument("The new cloud platform has made deployment much easier.", "positive");
classifier.addDocument("The integration of blockchain technology has greatly enhanced security.", "positive");
classifier.addDocument("This development framework is really making the coding process smoother.", "positive");
classifier.addDocument("I am really happy with how the team automated the CI/CD pipeline.", "positive");

classifier.addDocument("The software update introduced a lot of bugs that weren't there before.", "negative");
classifier.addDocument("The codebase is too complex, and it's hard to maintain.", "negative");
classifier.addDocument("The system crashed after the last patch was deployed.", "negative");
classifier.addDocument("The latest software release was disappointing and didn't meet expectations.", "negative");
classifier.addDocument("The new algorithm is too slow and inefficient for large datasets.", "negative");
classifier.addDocument("We are facing a lot of issues with the integration of third-party libraries.", "negative");
classifier.addDocument("The programming language we’re using is outdated and lacks modern features.", "negative");
classifier.addDocument("The API documentation is unclear and difficult to understand.", "negative");
classifier.addDocument("The lack of unit tests is making it difficult to ensure code quality.", "negative");



// Train the classifier (finalize training)
classifier.train();

const negative_text_1 = "The latest software release caused a lot of crashes and instability.";
const negative_text_2 = "The new AI model is giving inaccurate predictions, which is a major concern.";
const negative_text_3 = "The system is running really slow after the recent update.";
const negative_text_4 = "The framework is not flexible enough for our project requirements.";
const negative_text_5 = "The new API changes have introduced several bugs that weren't present before.";

const positive_text_1 = "The latest software update has made the application faster and more stable.";
const positive_text_2 = "The new algorithm is significantly improving the overall performance of our system.";
const positive_text_3 = "The cloud infrastructure upgrade has made scaling our app much easier.";
const positive_text_4 = "This framework has improved our development speed and reduced errors.";
const positive_text_5 = "The new features in the AI model are really helping automate tedious tasks.";


// Classify the sentiment of the sample text
const negative_sentiment_1 = classifier.classify(negative_text_1);
const positive_sentiment_1 = classifier.classify(positive_text_1);

console.log(`Sentence: ${negative_text_1}\nSentiment: ${negative_sentiment_1}`);
console.log(`Sentence: ${positive_text_1}\nSentiment: ${positive_sentiment_1}`);
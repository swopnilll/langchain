# Understanding LangChain: A Basic Introduction

## Overview
We will attempt to answer a fundamental question: What is LangChain, and why do we choose to use it? What is it really doing for us?

Answering this question is a bit more challenging than you might expect. To address it, we'll go through a process in this video and the following ones.

## Process
### Step 1: Demonstration of pdf.ai
We'll start by examining a public web application called pdf.ai. This web app, developed by others, allows users to upload a PDF document and ask ChatGPT questions about its contents. We'll give a quick demonstration of how this application works.

### Step 2: Behind the Scenes
Once we understand what pdf.ai does, we'll delve into the behind-the-scenes mechanisms. We'll explore how the application reads the PDF and how it gets ChatGPT to answer questions about it.

### Step 3: Understanding LangChain
With the knowledge of how pdf.ai works, we'll use that understanding to better comprehend what LangChain does for us. This process will provide a comprehensive overview of some of the current state-of-the-art technology in text generation.

## Demonstration
Let's start with a quick demonstration. I will open my browser and go to pdf.ai. it's just for illustration purposes.

### Uploading a Document
At pdf.ai, you'll see an option to chat with a document. You can upload a PDF, ask questions, and it sends everything off to ChatGPT, which then answers questions about the document. For this demonstration, I've taken a Wikipedia article about the planet Earth. The PDF contains 45 pages of extensive information about Earth's composition, history, etymology, and more.

### Interaction with the Document
After uploading the document, you can view it on the left-hand side and ask questions on the right-hand side. For example, if we look at a section titled "etymology," we find that "Modern English Earth is from the word erode" or something similar. This indicates the PDF has content about why Earth is called Earth.

### Asking Questions
Now, let's ask a question: "Where does the name Earth come from?" After sending this question, we quickly get a response that closely matches the text in the document. This demonstrates that pdf.ai can extract meaningful information from the PDF and use ChatGPT to answer questions accurately. Additionally, the tool provides links to the source of the information, further validating its responses.

## Next Steps
In the next section, we'll explore the behind-the-scenes operations of pdf.ai, focusing on how it understands the content of a PDF. This will pave the way for understanding LangChain and its role in text generation.

# Understanding the Application: High-Level Overview

This section provides a high-level overview of the application process. You don't need to memorize this right now, as we will build a clone of the application later, which will provide an in-depth explanation.

## Two Approaches for Answering User Questions

### Option 1: Direct Approach

1. **User Enters a Question**: 
    - The user enters a question into the web app.

2. **Send Entire PDF Text**: 
    - Take all the text from the PDF and send it along with the question to ChatGPT.

#### Why This Method is Inefficient:

- **Text Limitations**: We can only send a limited amount of text to ChatGPT. If the text is too long, ChatGPT will throw an error.
- **Performance Issues**: ChatGPT struggles with understanding and pulling meaning from a large amount of text.
- **Cost**: Sending large amounts of text to ChatGPT is expensive.

### Option 2: Optimized Approach

1. **Upload PDF**:
    - The user uploads a PDF document.

2. **Extract and Chunk Text**:
    - Extract all the text from the PDF and divide it into chunks (e.g., 1000 characters each).

3. **Generate Summaries**:
    - Run an algorithm over each chunk to generate a summary of its content.

4. **Store Summaries**:
    - Store the summaries in a database.

#### Waiting for User Questions:

1. **User Asks a Question**:
    - When a user asks a question, analyze the question to determine its content.

2. **Retrieve Relevant Chunks**:
    - Look up the most relevant text chunk summaries from the database.

3. **Generate Embeddings**:
    - Create an embedding for each chunk and the user question to understand their essence in numerical format.

4. **Find the Most Relevant Embedding**:
    - Compare embeddings to find the chunk most relevant to the question.

5. **Send to ChatGPT**:
    - Send the user's question and the relevant text chunk to ChatGPT.

#### Example Prompt:


## Why Use LangChain?

Understanding this process helps us see why we use LangChain. LangChain assists in managing and optimizing these steps, making the overall process more efficient.

### Steps with LangChain:

1. **Text Extraction and Chunking**:
    - Automates text extraction and chunking.

2. **Embedding Creation**:
    - Simplifies embedding generation and storage.

3. **Question Analysis**:
    - Enhances the process of analyzing questions and retrieving relevant text chunks.

4. **Efficient Query Handling**:
    - Optimizes sending relevant text to ChatGPT for accurate responses.

By using LangChain, we streamline the workflow, reduce costs, and improve performance in handling user questions based on PDF content.

<img width="1216" alt="image" src="https://github.com/user-attachments/assets/4f96775a-cb1d-45e1-b3c4-f253b7997b5e" />

<img width="933" alt="image" src="https://github.com/user-attachments/assets/3aa5439c-b06f-4c2a-b7f2-a08d6e754838" />

<img width="685" alt="image" src="https://github.com/user-attachments/assets/4cf9e1fc-9d52-4d03-a9e6-979b0ca6ab90" />

<img width="682" alt="image" src="https://github.com/user-attachments/assets/4be4a5d3-50e4-4b98-85ce-f9866c4e0118" />

<img width="706" alt="image" src="https://github.com/user-attachments/assets/ddd04885-bda5-41fd-b328-48cdd435b608" />

<img width="674" alt="image" src="https://github.com/user-attachments/assets/a0ed411b-3f4c-4c8b-bc6d-5cac43b0ba28" />

<img width="697" alt="image" src="https://github.com/user-attachments/assets/d09d142c-d0b9-4cd2-87dd-3d565e1c0a74" />

<img width="673" alt="image" src="https://github.com/user-attachments/assets/2bfdea02-c587-4200-a208-5b90c049c849" />

<img width="702" alt="image" src="https://github.com/user-attachments/assets/d93829f1-9c90-4fff-a8ff-6c05283a8632" />

<img width="608" alt="image" src="https://github.com/user-attachments/assets/c6c9dc9a-862e-4ae2-90a7-f731ab559130" />

<img width="700" alt="image" src="https://github.com/user-attachments/assets/ac95905c-956d-488d-911e-7324dbf33d6f" />

<img width="690" alt="image" src="https://github.com/user-attachments/assets/01851ff8-0db1-4c33-aefc-82b40ee4c6e4" />

<img width="658" alt="image" src="https://github.com/user-attachments/assets/eeb89c70-2927-490b-bc1b-6ff4e6bf05a2" />

<img width="668" alt="image" src="https://github.com/user-attachments/assets/c31bf8bd-c169-4063-a6de-1a4abbfc6bcc" />

<img width="719" alt="image" src="https://github.com/user-attachments/assets/d6d12767-b394-4ffa-8860-f3aab3c49e49" />

# Detailed Process Explanation

## Step-by-Step Breakdown

### Step 1: Upload PDF

- The user uploads a PDF document to the application.
- This triggers the backend process to start handling the PDF.

### Step 2: Extract and Chunk Text

- **Text Extraction**:
    - Extract all the text from the uploaded PDF document.
    - Combine all the text from the PDF into one large string (BLOB).

- **Text Chunking**:
    - Divide the extracted text into smaller chunks. 
    - By default, each chunk is 1000 characters long, but this can be configured based on the application's needs.
    - Considerations for ideal chunk size will be discussed later.

### Step 3: Generate Summaries

- **Embedding Creation**:
    - Run an embedding creation algorithm on each chunk of text.
    - An embedding is a numerical representation (array of numbers) that distills the essence of the text.

#### Understanding Embeddings:

- **Definition**:
    - An embedding is an array of numbers that captures the essence of a text.
    - The embedding algorithm we use generates an array that is always 1,536 elements long, with each number between -1 and 1.

- **Purpose**:
    - Embeddings help us understand and compare the content of different text chunks.
    - They enable efficient mathematical operations to determine relevance between chunks and user queries.

- **Examples**:
    - For the text "I feel great", the embedding might look like `[0.12, -0.24, 0.56, -0.78, ...]` (1,536 elements in total).
    - Different texts produce different embeddings, capturing their unique essence.

### Step 4: Store Summaries

- Store the generated embeddings in a specialized database called a vector store.
- **Vector Store**:
    - Vector stores are optimized for storing and querying embeddings.
    - We can use traditional databases like SQLite or MySQL, but vector stores provide specialized features for handling embeddings.

## Handling User Questions

### Step 5: User Asks a Question

- When a user asks a question, the application analyzes the question to determine its content.

### Step 6: Retrieve Relevant Chunks

- **Generate Question Embedding**:
    - Create an embedding for the user's question using the same algorithm.
    - This provides a numerical representation of the question's essence.

- **Find Relevant Chunks**:
    - Compare the question embedding with the stored embeddings to find the most relevant text chunk.
    - Use mathematical operations to determine the closest match.

### Step 7: Send to ChatGPT

- Combine the user's question with the most relevant text chunk.
- Send this combined text to ChatGPT in a structured prompt.










